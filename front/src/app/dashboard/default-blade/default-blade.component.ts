import {Component, Input, Output, EventEmitter} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dashboard-default-blade',
  templateUrl: './default-blade.component.html',
  styleUrls: ['./default-blade.component.css']
})
export class DefaultBladeComponent{

  constructor(private http: HttpClient) {
  }


  @Output() updatePlan = new EventEmitter<boolean>()

  @Input()
  required_plan: number = 0;
  @Input()
  completed_plan: number = 0;
  @Input()
  worker_id: number = 0;

  victimDeadError = false;

  participant_id: number = 0;
  comment: string = '';

  addReport(): void{

    // let temp_plan = 0;

    let body = {
      worker_id: this.worker_id,
      participant_id: Number.parseInt(String(this.participant_id)),
      comment: this.comment
    };

    console.log(body);

    this.http.post('http://localhost:3080/api/add_report', body).subscribe((data:any) => {

      if(!data.ok){
        console.log('error')
      }

        // temp_plan = this.completed_plan;
        this.updatePlan.emit(true);

        // console.log(temp_plan);
        // console.log(this.completed_plan);
        // console.log(temp_plan == this.completed_plan);
        // if(temp_plan == this.completed_plan){
        //   this.victimAlreadyDead();
        // } else {
        //   this.victimDead();
        // }
    }
    )
  }

  getMark(made: number, need: number): string{
    if (made >= need){
      return 'done'
    }else{
      return 'notdone';
    }
  }

  // victimAlreadyDead(){
  //   this.victimDeadError = true;
  // }
  //
  // victimDead(){
  //   this.victimDeadError = false;
  // }

}
