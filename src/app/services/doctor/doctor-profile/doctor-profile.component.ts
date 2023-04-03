import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DocUpdateAvailabilityComponent } from '../doc-update-availability/doc-update-availability.component';


@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent {

  constructor(private dialog: MatDialog,private router:Router) { }

  add_available()
  {
    const dRef = this.dialog.open(DocUpdateAvailabilityComponent, {
      width: '500px',
      data: { }
    });
  }

  to_accpetedAppointment(){
    this.router.navigate(['docacceptedappointments']);
  }

  to_pendingAppointment(){
    this.router.navigate(['doctdapp']);

  }



}
