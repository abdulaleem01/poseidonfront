import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pat-med-history-nav',
  templateUrl: './pat-med-history-nav.component.html',
  styleUrls: ['./pat-med-history-nav.component.css']
})
export class PatMedHistoryNavComponent {
  constructor(private router: Router) {

  }

  to_pat_profile() {
    this.router.navigate(['patient_profile'])
  }
}
