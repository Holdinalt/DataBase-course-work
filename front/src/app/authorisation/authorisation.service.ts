import {Injectable} from "@angular/core";
import * as shajs from "sha.js";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthorisationService{

  constructor(private http: HttpClient) {
  }

  logIn(login: string, pass: string): Observable<Object>{

    let password = pass + 'ilovepizza';
    password = shajs('sha256').update(password).digest('hex');

    //console.log(password);

    let body = {login: login, password: pass} // доделать
    return this.http.post('http://localhost:3080/api/login', body)
  }

  register(login: string, pass: string): Observable<Object>{

    let password = pass + 'ilovepizza';
    password = shajs('sha256').update(password).digest('hex');

    let body = {login: login, password: password}

    return this.http.post('http://localhost:3080/api/register', body);
  }
}

