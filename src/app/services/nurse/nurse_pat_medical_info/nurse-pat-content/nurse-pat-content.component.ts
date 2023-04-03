import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NursePatHistoryDialogComponent } from '../nurse-pat-history-dialog/nurse-pat-history-dialog.component';
import { NursePatHistoryPrescriptionComponent } from '../nurse-pat-history-prescription/nurse-pat-history-prescription.component';
import { NurseShowVitalComponent } from '../nurse-show-vital/nurse-show-vital.component';
import { ServicenurseService } from '../../servicenurse.service';

export interface visitHistory {
  id: number;
  patientId: number;
  height: number;
  weight: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  bodyTemperature: number;
  respirationRate: number;
  bloodGroup: string;
  nurseEmail: string;
  physicianEmail: string;
  appointmentId: number;
  keyNotes: string;
}
@Component({
  selector: 'app-nurse-pat-content',
  templateUrl: './nurse-pat-content.component.html',
  styleUrls: ['./nurse-pat-content.component.css']
})
export class NursePatContentComponent{
  patient:any=this.getPatData();
  getPatData(){
    return this.service.getPatientData(this.service.medPatientData.patientId).subscribe((data:any)=>{this.patient=data;
    console.log(data)});
}
  constructor(private router: Router, public dialog: MatDialog,private service:ServicenurseService) {
      this.demo();
      this.getPatData();
  }

  demo(){
    this.service.getMedicalHistory(this.service.medPatientData.patientId).subscribe((res) => {
      this.visitHistoryArray = res;
      for (var visit of this.visitHistoryArray) {
        var eachVisit: visitHistory = {
          id: visit.id,
          patientId: visit.patientId,
          height: visit.height,
          weight: visit.weight,
          bloodPressureSystolic: visit.bloodPressureSystolic,
          bloodPressureDiastolic: visit.bloodPressureDiastolic,
          bodyTemperature: visit.bodyTemperature,
          respirationRate: visit.respirationRate,
          bloodGroup: visit.bloodGroup,
          nurseEmail: visit.nurseEmail,
          physicianEmail: visit.physicianEmail,
          appointmentId: visit.appointmentId,
          keyNotes: visit.keyNotes,
        };

        this.MedicalHistoryArray.push(eachVisit);
        // console.log(this.MedicalHistoryArray);
        this.MostRecentMedicalHistory =
          this.MedicalHistoryArray[this.MedicalHistoryArray.length - 1];
        // console.log(this.MostRecentMedicalHistory);
      }
    });
  }

  to_nurse_appoint() {
    this.router.navigate(['nurse_appointment']);
  }

  openDialog(visitId: number): void {
    localStorage.setItem('currentVisitId', visitId.toString());
    const dialogRef = this.dialog.open(NursePatHistoryDialogComponent, {
      data: {},
      width: '40%',
    });
  }

  openPrescriptionDialog(visitId: number): void {
    localStorage.setItem('currentVisitId', visitId.toString());
    const dialogRef = this.dialog.open(
      NursePatHistoryPrescriptionComponent,
      {
        data: {},
        width: '40%',
      }
    );
  }

  openvitals(visitId: number) {
    localStorage.setItem('currentVisitId', visitId.toString());
    const dialogRef = this.dialog.open(NurseShowVitalComponent, {
      data: {},
      width: '40%',
    });
  }

  visitHistoryArray: any = [];
  MedicalHistoryArray: visitHistory[] = [];
  MostRecentMedicalHistory: visitHistory;
  BasicDetails: any;
  getPatientDetails(){
    return this.service.getPatientData(this.service.medPatientData.patientId).subscribe(data=>{
     this.patient=data;
    });
  }

  ngOnInit(): void {
    
  }

  getDoctorName(email: string) {
    return (
      email.split('.')[0].charAt(0).toUpperCase() + email.split('.')[0].slice(1)
    );
    //   this.service.getDoctorData(email).subscribe((data)=>
    // {
    //   return data.name;
    // })
  }

  getDeptName(email: string) {
    return (
      email.split('.')[1].split('@')[0].charAt(0).toUpperCase() +
      email.split('.')[1].split('@')[0].slice(1)
    );
  }

}
