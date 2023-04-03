import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { AdminServiceService } from '../admin-service.service';
import { pipe, catchError, throwError } from 'rxjs';


const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-admin-add-doctor',
  templateUrl: './admin-add-doctor.component.html',
  styleUrls: ['./admin-add-doctor.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AdminAddDoctorComponent {  
  
  date = new FormControl(moment());
  
  constructor(private router: Router, private adminservice: AdminServiceService) {
  }
  
  onSubmit(f: any) {
    this.adminservice.addDoctors(f).pipe(
      catchError(error => {
        const statusCode = error.status;
        console.log("failed");
        return throwError(error);
      })).subscribe(response => {
        console.log(response);
        console.log("Added successfully");
      })
      
      console.log(f.email);

      alert("Doctor added successfully");

      this.adminservice.getDoctorsbyEmail(f.email).subscribe(res => {
        // console.log(res);  

        this.adminservice.addAvailability(f.email).subscribe(data => {
          console.log(data);
          
        })
      })

      this.router.navigate(['adminhome'])
  }

  getValue(f: any) {
    console.log(f.name);
  }

  to_admin() {
    this.router.navigate(['adminhome'])
  }
}
