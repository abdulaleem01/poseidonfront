import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.css']
})
export class DoctorhomeComponent {
  constructor(private router: Router) { }
  
  to_services() {
    this.router.navigate(['service_home']);
  }

}
