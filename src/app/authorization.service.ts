import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  adminRoute:boolean=false;
  authour:string;

  constructor(public route:Router) { }
  public email:any;
  public isAuthenticated:boolean;

  public AuthorizeFunc(email:any){
    // this.email = email;
    console.log(email);
    this.authour=email;
    if(email==='admin.com'){
      this.adminRoute = true;
    }
    else{
      this.adminRoute=false;
    }
}


}
