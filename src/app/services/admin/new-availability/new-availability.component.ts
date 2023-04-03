import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { getAvailableDoc, AdminServiceService , physician_Available} from '../admin-service.service';
import { pipe, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

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
  selector: 'app-new-availability',
  templateUrl: './new-availability.component.html',
  styleUrls: ['./new-availability.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class NewAvailabilityComponent implements OnInit {

  doctor_available!: getAvailableDoc;  

  physician: physician_Available = {
    physician_email: '',
    availablefrom: '',
    availableTo: ''
  }

  doctors: getAvailableDoc = {
    doctorEmail: '',
    availableFrom: '',
    availableTo: '',
    scheduleStatus: false
  }

  startDate: Date;
  endDate: Date;
  
  fromDate: Moment;
  toDate: Moment;

  fromdateinput: string;
  todateinput: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogref: MatDialogRef<NewAvailabilityComponent>,
    private adminservice: AdminServiceService,
    private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.data.docemail);
    this.adminservice.getDoctorsAvailablebyEmail(this.data.docemail).subscribe(response => {
      // console.log(response);
      this.doctor_available = response;

      var start_date = this.doctor_available.availableFrom.split('/');
      var end_date = this.doctor_available.availableTo.split('/');

      this.startDate = new Date();
      this.endDate = new Date(Number(end_date[2]), Number(end_date[1]) - 1, Number(end_date[0]));

      // console.log(this.startDate);
      // console.log(this.endDate);
      
      
    })
    // console.log(this.doctor_available.availableFrom);
  }

  add_availability() {
    this.fromdateinput = moment(this.fromDate).format('DD/MM/YYYY')
    this.todateinput = moment(this.toDate).format('DD/MM/YYYY') 

    console.log(this.fromdateinput);
    console.log(this.todateinput);
  
  
    this.physician.physician_email = this.data.docemail;
    this.physician.availablefrom = this.fromdateinput;
    this.physician.availableTo = this.todateinput;

    console.log(this.physician);

    this.adminservice.addphysicalAvailability(this.physician).pipe(
      catchError(error => {
        const statusCode = error.status;
        // console.log("failed");
        return throwError(error);
      })).subscribe(response => {
        console.log(response);
        // console.log("Added successfully");
      })

    this.adminservice.getDoctorsAvailablebyEmail(this.data.docemail).subscribe(response => {
      this.doctor_available = response;

      this.doctor_available.scheduleStatus = true;

      this.adminservice.updateDocAvailStatus(this.doctor_available).subscribe(data => {
        console.log(data);

        this.router.navigateByUrl('', {skipLocationChange: false}).then(() => {
          this.router.navigate(['admin-available-doc'])
        })
      })
      console.log("get doctors");
      
      console.log(this.doctor_available);
    })

    this.dialogref.close();
  }

  close_dialogbox() {
    this.dialogref.close();
  }
}
