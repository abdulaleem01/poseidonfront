import { Component } from '@angular/core';
import { getAvailableDoc, AdminServiceService, physician_Available } from '../../admin/admin-service.service';
import { Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

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
  selector: 'app-doc-update-availability',
  templateUrl: './doc-update-availability.component.html',
  styleUrls: ['./doc-update-availability.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],

})
export class DocUpdateAvailabilityComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogref: MatDialogRef<DocUpdateAvailabilityComponent>,
    private service: AdminServiceService,
    private router: Router) {
  }

  startDate = new Date();


  doctors: getAvailableDoc = {
    doctorEmail: '',
    availableFrom: '',
    availableTo: '',
    scheduleStatus: false
  }

  fromDate: Moment;
  toDate: Moment;


  fromdateinput: string;
  todateinput: string;




  add_availability() {
    this.fromdateinput = moment(this.fromDate).format('DD/MM/YYYY')
    this.todateinput = moment(this.toDate).format('DD/MM/YYYY')

    this.doctors.availableFrom = this.fromdateinput;
    this.doctors.availableTo = this.todateinput;
    this.doctors.doctorEmail = localStorage.getItem('doctorEmail');

    this.service.updateDocAvailStatus(this.doctors).subscribe(res => {
      console.log(res);

    })


    console.log(this.fromdateinput);
    console.log(this.todateinput);
    console.log(this.doctors);

    this.dialogref.close();
  }

  close_dialogbox() {
    this.dialogref.close();
  }
}







