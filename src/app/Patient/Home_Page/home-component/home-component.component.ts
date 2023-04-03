import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  constructor(public auth : AuthService){
    this.auth.user$.subscribe((profile) => {
      console.log(profile?.email?.split('@')[1]);}
    )};


  }


