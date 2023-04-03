import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

import { AuthorizationService } from './authorization.service';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poseidon-healthcare';
  ext:any;

  // constructor(private route:Router){}
  constructor(public auth : AuthService,private route:Router,public myauth:AuthorizationService,public doc:DoctorService){
    this.auth.user$.subscribe((profile) => {
      this.doc.Doctor_name = profile?.email;


     localStorage.setItem('doctorEmail',profile?.email);
      console.log(profile?.email);
      console.log(profile?.email?.split('@')[1]);
      this.ext = profile?.email?.split('@')[1]
      myauth.AuthorizeFunc(this.ext);

      switch(this.ext){
        case "admin.com":
        this.route.navigate(['/adminhome']);
        break;
        case "doctor.com":
          this.route.navigate(['/doctorhome']);
        break;
        case "nurse.com":
          this.route.navigate(['/nursehome']);
          break;

    }
  })
      // this.switcher(this.ext);
    // )};
  
  // switcher(a?:any){
  //   switch(a){
  //     case "admin.com":
  //     this.route.navigate(['/adminhome']);
  //     break;
  //   }
  }

  ngOnInit(){
    
  }


}
