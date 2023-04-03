import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pat-appointment-history-content',
  templateUrl: './pat-appointment-history-content.component.html',
  styleUrls: ['./pat-appointment-history-content.component.css']
})
export class PatAppointmentHistoryContentComponent {

  constructor(private router: Router) {
    
  }

   to_profile() {
    this.router.navigate(['patient_profile']);
  }
}
