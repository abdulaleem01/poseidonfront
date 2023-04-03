import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse-appointment-navbar',
  templateUrl: './nurse-appointment-navbar.component.html',
  styleUrls: ['./nurse-appointment-navbar.component.css']
})
export class NurseAppointmentNavbarComponent {
    constructor(private router: Router){

    }
    to_nurse_profile()
    {
      this.router.navigate(['nursehome'])
    }
}
