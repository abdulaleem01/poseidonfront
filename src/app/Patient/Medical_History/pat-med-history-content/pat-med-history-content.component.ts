import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { PatMedHistoryDialogComponent } from '../pat-med-history-dialog/pat-med-history-dialog.component';
import { PatMedHistoryPrescriptionDialogComponent } from '../pat-med-history-prescription-dialog/pat-med-history-prescription-dialog.component';
import { PatShowVitalComponent } from '../pat-show-vital/pat-show-vital.component';
import { ServicePatientService } from '../../service-patient.service';

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
  selector: 'app-pat-med-history-content',
  templateUrl: './pat-med-history-content.component.html',
  styleUrls: ['./pat-med-history-content.component.css'],
})
export class PatMedHistoryContentComponent implements OnInit {
  load: boolean = true;
  show: boolean = false;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private service: ServicePatientService
  ) {}
  to_profile() {
    this.router.navigate(['patient_profile']);
  }

  openDialog(visitId: number): void {
    localStorage.setItem('currentVisitId', visitId.toString());
    const dialogRef = this.dialog.open(PatMedHistoryDialogComponent, {
      data: {},
      width: '40%',
    });
  }

  openPrescriptionDialog(visitId: number): void {
    localStorage.setItem('currentVisitId', visitId.toString());
    const dialogRef = this.dialog.open(
      PatMedHistoryPrescriptionDialogComponent,
      {
        data: {},
        width: '40%',
      }
    );
  }

  openvitals(visitId: number) {
    localStorage.setItem('currentVisitId', visitId.toString());
    const dialogRef = this.dialog.open(PatShowVitalComponent, {
      data: {},
      width: '40%',
    });
  }

  visitHistoryArray: any = [];
  MedicalHistoryArray: visitHistory[] = [];
  MostRecentMedicalHistory: visitHistory;
  BasicDetails: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getMedicalHistory().subscribe((res) => {
      this.visitHistoryArray = res;
      if (this.visitHistoryArray.length != 0) {
        this.load = false;
        this.show = true;
      } else {
        this.load = false;
        this.show = false;
      }
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
        console.log(this.MedicalHistoryArray);
        this.MostRecentMedicalHistory =
          this.MedicalHistoryArray[this.MedicalHistoryArray.length - 1];

        console.log(this.MostRecentMedicalHistory);
      }
    });
    this.getBasicDetails();
  }

  getDoctorName(email: string) {
    return (
      email.split('.')[0].charAt(0).toUpperCase() + email.split('.')[0].slice(1)
    );
  }

  getDeptName(email: string) {
    return (
      email.split('.')[1].split('@')[0].charAt(0).toUpperCase() +
      email.split('.')[1].split('@')[0].slice(1)
    );
  }

  getBasicDetails() {
    this.service
      .getDetailsForProfile(JSON.parse(localStorage.getItem('LoggedInUserId')!))
      .subscribe((res) => {
        this.BasicDetails = res;
        console.log(this.BasicDetails);
      });
  }
}
