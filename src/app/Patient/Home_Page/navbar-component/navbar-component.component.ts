import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {
  constructor(private router: Router)
  {

  }
  to_signin()
  {
    this.router.navigate(['signin_page'])
  }
  to_login()
  {
    this.router.navigate(['login_page'])
  }
  to_patient_home()
  {
    this.router.navigate(['patient_home'])
  }
}
