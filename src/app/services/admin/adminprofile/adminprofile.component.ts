import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  constructor(private router: Router){}

  to_schedule()
  {
    this.router.navigate(['admin_schedule'])
  }

  to_avail_doc()
  {
    this.router.navigate(['admin-available-doc'])
  }

  to_admin_home()
  {
    this.router.navigate(['admin_patient_info'])
  }

  to_add_doc()
  {
    this.router.navigate(['admin_add_doc'])
  }
}
