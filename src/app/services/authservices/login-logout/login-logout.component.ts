import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { AuthorizationService } from 'src/app/authorization.service';
@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css']
})
export class LoginLogoutComponent {
  constructor( @Inject(DOCUMENT) public document: Document,public auth: AuthService,public myauth:AuthorizationService) {}

  login() {

    console.log(this.auth.user$);

    this.auth.loginWithRedirect();
    this.myauth.AuthorizeFunc(this.auth.user$);

    // this.auth.isAuthenticated$.subscribe((data) => {
    //   console.log(data);
    // });

  }

  logout() {
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.document.location.origin 
      }
    });
  }
}
