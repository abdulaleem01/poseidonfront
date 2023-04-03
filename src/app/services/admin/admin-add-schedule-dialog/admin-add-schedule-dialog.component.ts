import { Component, Inject, OnInit } from '@angular/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { getAvailableDoc, AdminServiceService, physician_Available } from '../admin-service.service';

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
  selector: 'app-admin-add-schedule-dialog',
  templateUrl: './admin-add-schedule-dialog.component.html',
  styleUrls: ['./admin-add-schedule-dialog.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})

export class AdminAddScheduleDialogComponent implements OnInit {

  doctor_available!: getAvailableDoc;

  phy_avail: any;

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

  phyFromDate: string;
  phyToDate: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogref: MatDialogRef<AdminAddScheduleDialogComponent>,
    private adminservice: AdminServiceService) {
  }

  ngOnInit(): void {
    // console.log(this.data.phyemail);    
    this.adminservice.getDoctorsAvailablebyEmail(this.data.phyemail).subscribe(response => {
      // console.log(response);
      this.doctor_available = response;

      var start_date = this.doctor_available.availableFrom.split('/');
      var end_date = this.doctor_available.availableTo.split('/');

      this.startDate = new Date();
      this.endDate = new Date(Number(end_date[2]), Number(end_date[1]) - 1, Number(end_date[0]));
    })

    this.adminservice.getPhysicianAvailablebyEmail(this.data.phyemail).subscribe(res => {
      
      this.phy_avail = res;
      
      this.phyFromDate = this.phy_avail[0].availablefrom;
      this.phyToDate = this.phy_avail[0].availableTo;
    })
  }

  add_availability() {
    
    this.fromdateinput = moment(this.fromDate).format('DD/MM/YYYY')
    this.todateinput = moment(this.toDate).format('DD/MM/YYYY')

    this.physician.physician_email = this.data.phyemail;
    this.physician.availablefrom = this.fromdateinput;
    this.physician.availableTo = this.todateinput;

    this.adminservice.updatePhysicianAvailability(this.physician).subscribe(data => {
      console.log(data);
    })
    
    // console.log("added");
    // console.log(this.data.phyemail);
    // console.log(this.fromdateinput);
    // console.log(this.todateinput);
    
    this.dialogref.close();
  }
  
  close_dialogbox() {
    console.log("closed");
    this.dialogref.close();
  }
}
