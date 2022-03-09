import {User} from "./models/user";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class UserHandlerService implements OnInit{

  private user: User = new User(
    -1,
    '',
    '',
    -1,
    -1,
    '',
    '',
    -1
  );

  getUser(): User{
    if (this.user.ID == -1){
      if(sessionStorage.getItem('user') != null){
        // @ts-ignore
        this.user = JSON.parse(sessionStorage.getItem('user'));
        console.log('got from session');
        //console.log(this.user);
      }
    }
    return this.user;
  }

  setUser(user:User): void{
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(this.user))
    //console.log(this.user);
  }

  deleteUser(): void{
    this.user = new User(
      -1,
      '',
      '',
      -1,
      -1,
      '',
      '',
      -1
    );
    sessionStorage.removeItem('user');
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('user') != null){
      // @ts-ignore
      this.user = JSON.parse(sessionStorage.getItem('user'));
      console.log('got from session');
    }
  }

}
