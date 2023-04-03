import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { getAvailableDoc, AdminServiceService, physician_Available } from '../admin-service.service';

@Component({
  selector: 'app-admin-avail-delete-dialogbox',
  templateUrl: './admin-avail-delete-dialogbox.component.html',
  styleUrls: ['./admin-avail-delete-dialogbox.component.css']
})
export class AdminAvailDeleteDialogboxComponent {

  doctor_available!: getAvailableDoc;  

  doctors: getAvailableDoc = {
    doctorEmail: '',
    availableFrom: '',
    availableTo: '',
    scheduleStatus: false
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogref: MatDialogRef<AdminAvailDeleteDialogboxComponent>,
    private adminservice: AdminServiceService,
    private router: Router) {
  }

  delete_availability()
  {
    console.log(this.data.phyemail);
    
    this.adminservice.deletePhysicianAvailability(this.data.phyemail).subscribe(data => {
      console.log(data);
    })

    this.adminservice.getDoctorsAvailablebyEmail(this.data.phyemail).subscribe(response => {
      this.doctor_available = response;

      this.doctor_available.scheduleStatus = false;

      this.adminservice.updateDocAvailStatus(this.doctor_available).subscribe(data => {
        console.log(data);

        this.router.navigateByUrl('', {skipLocationChange: false}).then(() => {
          this.router.navigate(['admin_schedule']);
        });
      })
      console.log("get doctors");
      
      console.log(this.doctor_available);
    })

    this.dialogref.close();
  }

  cancel()
  {    
    this.dialogref.close()
  }
}
