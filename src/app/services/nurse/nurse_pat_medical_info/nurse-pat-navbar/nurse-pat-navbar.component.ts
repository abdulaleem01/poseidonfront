import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse-pat-navbar',
  templateUrl: './nurse-pat-navbar.component.html',
  styleUrls: ['./nurse-pat-navbar.component.css']
})
export class NursePatNavbarComponent {
  constructor(private router: Router) {

  }
  to_nurse() {
    this.router.navigate(['nursehome'])
  }
}
