import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pat-appointment-nav',
  templateUrl: './pat-appointment-nav.component.html',
  styleUrls: ['./pat-appointment-nav.component.css']
})
export class PatAppointmentNavComponent {
  constructor(private router: Router) {

  }

  to_pat_profile() {
    this.router.navigate(['patient_profile'])
  }
}
