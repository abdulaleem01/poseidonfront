import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.css']
})
export class ServiceContentComponent {

  constructor(private router:Router)
  {

  }

  to_patient()
  {
    this.router.navigate(['patient_home'])
  }

}
