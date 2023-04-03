import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-navbar-component',
  templateUrl: './signin-navbar-component.component.html',
  styleUrls: ['./signin-navbar-component.component.css']
})
export class SigninNavbarComponentComponent {
  constructor(private router: Router) {

  }
  to_loginin() {
    this.router.navigate(['login_page'])
  }
  to_patient_home()
  {
    this.router.navigate(['patient_home'])
  }
}
