import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-nav',
  templateUrl: './doctor-nav.component.html',
  styleUrls: ['./doctor-nav.component.css']
})
export class DoctorNavComponent {
  constructor(private router: Router){

  }

  to_doc_profile()
  {
    this.router.navigate(['doctorhome'])
  }
}
