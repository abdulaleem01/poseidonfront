import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public myauth:AuthorizationService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const { routeConfig } = route; 
   
   const { path } = routeConfig as Route; 

   if (path?.includes('adminhome') && this.myauth.authour==='admin.com' ) {
 
      return true;
    }

    if ((path?.includes('doctorhome') || path?.includes('doctdapp') || path?.includes('docacceptedappointments')) && this.myauth.authour==='doctor.com' ) {
 
      return true;
    }

    if (path?.includes('nursehome') && this.myauth.authour==='nurse.com' ) {
 
      return true;
    }
    this.route.navigateByUrl('/forbiddenroute'); 
    return false;
  }
  
}
