import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pat-appointment-history-nav',
  templateUrl: './pat-appointment-history-nav.component.html',
  styleUrls: ['./pat-appointment-history-nav.component.css']
})
export class PatAppointmentHistoryNavComponent {
  constructor(private router: Router) {

  }

  to_pat_profile() {
    this.router.navigate(['patient_profile'])
  }
}
