import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocPatMedHistoryPrescriptionDialogComponent } from '../doc-pat-med-history-prescription-dialog/doc-pat-med-history-prescription-dialog.component';
import { DocPatMedHistoryTestDialogComponent } from '../doc-pat-med-history-test-dialog/doc-pat-med-history-test-dialog.component';
import { DocShowVitalComponent } from '../doc-show-vital/doc-show-vital.component';
import { DoctorService } from 'src/app/doctor.service';
@Component({
  selector: 'app-doc-pat-med-history-content',
  templateUrl: './doc-pat-med-history-content.component.html',
  styleUrls: ['./doc-pat-med-history-content.component.css']
})
export class DocPatMedHistoryContentComponent {
  patientDetails:any;
  VisitDetailsList:any;
   constructor(private router:Router,public dialog:MatDialog,public doc:DoctorService)
  {

   }

   ngOnInit(){
    this.doc.GetPatientById(this.doc.PatientId).subscribe(response =>{
      console.log(response);
      this.patientDetails = response;
    })

    this.doc.GetVisitByPatientId(this.doc.PatientId).subscribe(response =>{
      console.log(response);
      this.VisitDetailsList = response;
    })
   }
  to_UpdateMedInfo() {
    this.router.navigate(['update_medInfo']);
  }
  
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DocPatMedHistoryTestDialogComponent, {
      data: {
        dataKey: id
      },
      width: '40%'
    });
    console.log(id);
   }
  
  openPrescriptionDialog(id:number): void{
     const dialogRef = this.dialog.open(DocPatMedHistoryPrescriptionDialogComponent, {
      data: {
        dataKey: id

      },
      width: '40%'
    });
    console.log(id);

  }

  openvitals(id:number)
  {
   const dialogRef = this.dialog.open(DocShowVitalComponent, {
    data: {
      dataKey: id

    },
    width: '40%'
   }); 
   console.log(id);

  }
}
