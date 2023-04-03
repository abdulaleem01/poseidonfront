import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-navbar-component',
  templateUrl: './login-navbar-component.component.html',
  styleUrls: ['./login-navbar-component.component.css']
})
export class LoginNavbarComponentComponent {

  constructor(private router: Router)
  {

  }
  to_signin()
  {
    this.router.navigate(['signin_page'])
  }
  to_patient_home()
  {
    this.router.navigate(['patient_home'])
  }
}
