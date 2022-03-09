import {Component, OnInit} from '@angular/core';
import {UserHandlerService} from "../user-handler.service";
import {User} from "../models/user";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Reaper_plan} from "../models/reaper_plan";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  user: User = new User(
    -1,
    '',
    '',
    -1,
    -1,
    '',
    '',
    -1
  );

  plan: number[] = [];
  reapers_plan: Reaper_plan[] = [];

  constructor(private userHandler:UserHandlerService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.user = this.userHandler.getUser();
    //console.log(this.user.Country_Id);
    if (this.user.ID == -1){
      this.router.navigate([''])
    }
    switch (this.user.Mode){
      case 1:{
        this.getPlan(this.user.ID);
        break;
      }
      case 2:{

        this.getReapersPlan(this.user.Country_Id);
        break;
      }
    }
    //console.log(this.reapers_plan);
  }

  clearUser():void{
    this.userHandler.deleteUser();
    this.router.navigate(['']);
  }

  makePost(): string{
    switch (this.user.Mode){
      case 1: {
        return 'Жнец';
      }
      case 2: {
        return 'Высокое лезвие: ' + this.user.Country;
      }
      case 3: {
        return 'Высшее лезвие';
      }
      default: {
        return 'Жнец';
      }
    }
  }

  getPlan(id: number):void{

    let out: number[] = []

    let body = {user_id: id}
    this.http.post('http://localhost:3080/api/plan', body).subscribe((data:any) => {
      let _data = data[0];
      out.push(_data.monthly_quota);
      out.push(_data.monthly_reaped);
      this.plan = out;
    })

  }

  getReapersPlan(country_id: number){
    let out_plan: Reaper_plan[] = [];

    let body = {country_id: country_id};

    //console.log(country_id);

    this.http.post('http://localhost:3080/api/reapers_plan', body).subscribe((data:any) => {


      for (let row of data){
        out_plan.push(
          new Reaper_plan(
            row.id,
            row.name,
            row.surname,
            row.plan,
            row.actual_plan
          )
        )
      }
    })
    this.reapers_plan = out_plan;
  }

  updatePlan($event: any){
    this.getPlan(this.user.ID);
  }

}
