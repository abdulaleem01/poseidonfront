import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicePatientService } from '../../service-patient.service';
import { catchError, throwError, pipe } from 'rxjs';
import { Router } from '@angular/router';

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
  selector: 'app-patient-edit-dialogbox',
  templateUrl: './patient-edit-dialogbox.component.html',
  styleUrls: ['./patient-edit-dialogbox.component.css'],
})
export class PatientEditDialogboxComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<PatientEditDialogboxComponent>,
    private service: ServicePatientService,
    private router: Router
  ) {}

  patientData: patientObj;
  email: string;
  phoneNo: string;
  add: string;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.currentUser = JSON.parse(localStorage.getItem('LoggedInUserId')!);
    this.service.getDetailsForProfile(this.currentUser).subscribe((res) => {
      this.patientData = res;
      this.email = this.patientData.email;
      this.phoneNo = this.patientData.contactNumber;
      this.add = this.patientData.address;
      console.log(this.email);
    });
  }
  currentUser: any;

  onSubmit(f: any) {
    this.patientData.address = this.add;
    this.patientData.email = this.email;
    this.patientData.contactNumber = this.phoneNo;
    this.service
      .updatePersonalDetails(this.currentUser, this.patientData)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;
          console.log('failed');
          return throwError(error);
        })
      )
      .subscribe((response) => {
        // This is where you can handle the successful response
        console.log('success');
        this.router.navigateByUrl('/patient_book_app', {
          skipLocationChange: false,
        });

        this.router.navigate(['patient_profile']);
      });
    console.log(this.patientData);
  }
  getValue(f: any) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
