import {Component, OnInit} from '@angular/core';
import {AuthorisationService} from "./authorisation.service";
import {UserHandlerService} from "../user-handler.service";
import {User} from "../models/user";
import {take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.css']
})
export class AuthorisationComponent implements OnInit{

  login = '';
  password = '';
  Error = '';
  reg_mode = false;
  passportId = 1;

  constructor(private userHandlerService:UserHandlerService,
              private authorisationService: AuthorisationService,
              private router: Router
              ) {
  }

  logIn(): void{

    this.authorisationService.logIn(this.login, this.password).subscribe((data: any) => {
      console.log(data)

      console.log(data.ok)

      let _data = data[0];
      if (_data.valid === true) {
        let user = new User(
          Number.parseInt(_data.id),
          _data.login,
          _data.country,
          _data.country_id,
          Number.parseInt(_data.totalReapings),
          _data.name,
          _data.surname,
          Number.parseInt(_data.mode)
        );

        this.resolveError();
        this.userHandlerService.setUser(user);
        this.router.navigate(['/dashboard']);
      } else {
        this.makeError('Неудачная попытка входа');
      }
        console.log('got');

    },

    err => {
      this.makeError('Нет ответа от БД')
    }
    );
  }

  Register(): void{



  }

  makeError(error:string): void{
    this.Error = error;
  }

  resolveError(): void{
    this.Error = '';
  }

  ngOnInit(): void {

    if(sessionStorage.getItem('user') != null){
      this.router.navigate(['/dashboard']);
    }

  }
}
