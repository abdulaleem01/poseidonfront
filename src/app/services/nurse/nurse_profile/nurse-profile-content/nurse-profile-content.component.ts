import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse-profile-content',
  templateUrl: './nurse-profile-content.component.html',
  styleUrls: ['./nurse-profile-content.component.css']
})
export class NurseProfileContentComponent {

  constructor(private route: Router)
  {}

  to_appointment()
  {
    this.route.navigate(['nurse_appointment'])
  }
}
