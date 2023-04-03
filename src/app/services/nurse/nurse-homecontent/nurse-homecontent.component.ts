import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nurse-homecontent',
  templateUrl: './nurse-homecontent.component.html',
  styleUrls: ['./nurse-homecontent.component.css']
})
export class NurseHomecontentComponent {

  constructor(private router: Router) {
    
  }

   to_services() {
    this.router.navigate(['service_home']);
  }
}
