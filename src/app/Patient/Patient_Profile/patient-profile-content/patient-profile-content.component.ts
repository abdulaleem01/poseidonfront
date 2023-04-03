import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { PatientEditDialogboxComponent } from '../patient-edit-dialogbox/patient-edit-dialogbox.component';
import { ServicePatientService } from '../../service-patient.service';
import { interval, Observable } from 'rxjs';

export interface patientObj {
  email: string;
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
  contactNumber: string;
  password: string;
  gender: string;
  address: string;
}
@Component({
  selector: 'app-patient-profile-content',
  templateUrl: './patient-profile-content.component.html',
  styleUrls: ['./patient-profile-content.component.css'],
})
export class PatientProfileContentComponent implements OnInit {
  @Input() patient: Observable<any>;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private service: ServicePatientService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PatientEditDialogboxComponent, {
      data: {},
      width: '35%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  to_book_appointment() {
    this.router.navigate(['patient_book_app']);
  }

  to_medicalHistory() {
    this.router.navigate(['patient_medHistory']);
  }

  to_services() {
    this.router.navigate(['service_home']);
  }

  to_appointmentHistory() {
    this.router.navigate(['patient_appointmentHistory']);
  }
  patientData: patientObj;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData();
    this.service.getRefreshRequired().subscribe((response) => {
      this.getData();
    });
    // console.log(this.patientData);
  }
  currentUser: any;

  getData() {
    this.currentUser = JSON.parse(localStorage.getItem('LoggedInUserId')!);
    console.log(this.currentUser);
    this.service.getDetailsForProfile(this.currentUser).subscribe((res) => {
      this.patientData = res;
    });
  }
}
