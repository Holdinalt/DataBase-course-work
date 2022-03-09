export class User{

  ID: number = -1;
  Login: string = '';
  Country: string = '';
  Country_Id: number = -1;
  TotalReapings: number = 0;
  Name: string = '';
  Surname: string = '';
  Mode: number = -1;

  constructor(ID:number,
              login:string,
              country:string,
              country_id: number,
              totalReapings:number,
              name:string,
              surname:string,
              mode: number
              ) {



    this.ID = ID;
    this.Login = login;
    this.Country = country;
    this.Country_Id = country_id;
    this.TotalReapings = totalReapings;
    this.Name = name;
    this.Surname = surname;
    this.Mode = mode;
  }




}
