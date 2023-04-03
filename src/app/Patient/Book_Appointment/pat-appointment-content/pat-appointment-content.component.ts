import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { PatReasonDialogComponent } from '../pat-reason-dialog/pat-reason-dialog.component';

import { FormControl } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { ServicePatientService } from '../../service-patient.service';

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

//INTERFACE DECLARATIONS
export interface availability {
  name: string;
  email: string;
  dept: string;
  availablefrom: Date;
  availableTo: Date;
}

export interface appointment {
  reason: string;
  date: string;
  acceptance: number;
  patientId: number;
  physicianEmail: string;
  submissionDate: string;
}

@Component({
  selector: 'app-pat-appointment-content',
  templateUrl: './pat-appointment-content.component.html',
  styleUrls: ['./pat-appointment-content.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class PatAppointmentContentComponent implements OnInit {
  date = new FormControl(moment());
  bookDate: Date;
  show: boolean = true;
  dateCheck: boolean = false;
  load: boolean = true;

  startDate = new Date();

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private service: ServicePatientService
  ) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(PatReasonDialogComponent, {
      data: {},
      width: '35%',
    });
  }

  to_profile() {
    this.router.navigate(['patient_profile']);
  }

  availabilityList: any = [];
  doctorsList: availability[] = [];
  appointmentDate!: string;
  selectedDate!: Date;

  newAppointment: appointment = {
    reason: '',
    acceptance: 0,
    date: '',
    submissionDate: '',
    patientId: 0,
    physicianEmail: '',
  };

  //SETS SELECTED DATE AND SETS APPOINTMENT DATE TO NEW APPOINTMENT OBJECT
  setDate(f: Date) {
    this.doctorsList.length = 0;

    var nDate = new Date(f);

    this.selectedDate = this.getCorrectDate(nDate);
    this.bookDate = this.getCorrectDate(nDate);
    this.appointmentDate = moment(this.bookDate).format('DD/MM/YYYY');
    this.dateCheck = true;
    // nDate.getDate() +
    // '/' +
    // (nDate.getMonth() + 1) +
    // '/' +
    // nDate.getFullYear();
    this.newAppointment.date = this.appointmentDate;
    console.log('select ' + this.bookDate);

    this.service.getAllAvailableDoctors().subscribe((res) => {
      this.availabilityList = res;
      for (var doctor of this.availabilityList) {
        var toDate = moment(doctor.availableTo, 'DD/MM/YYYY').toDate();
        var fromDate = moment(doctor.availablefrom, 'DD/MM/YYYY').toDate();
        var AvailTo = this.getCorrectDate(toDate);
        var AvailFrom = this.getCorrectDate(fromDate);

        console.log('book ' + this.bookDate);

        if (this.bookDate >= AvailFrom && this.bookDate <= AvailTo) {
          this.show = true;
          console.log(doctor.physician_email);
          var doctors: availability = {
            name: doctor.physician_email.split('.')[0],
            email: doctor.physician_email,
            dept: doctor.physician_email.split('.')[1].split('@')[0],
            availablefrom: this.getCorrectDate(
              moment(doctor.availablefrom, 'DD/MM/YYYY').toDate()
            ),
            availableTo: AvailTo,
          };
          this.doctorsList.push(doctors);
        }
        if (this.doctorsList.length == 0) {
          this.load = false;
          this.show = false;
        }
      }
    });
  }

  //GETTING TODAY'S DATE IN DATE FORMAT
  nowDate: Date = new Date();
  TodayDate: Date = this.getCorrectDate(this.nowDate);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.service.getAllAvailableDoctors().subscribe((res) => {
    //   this.availabilityList = res;
    //   for (var doctor of this.availabilityList) {
    //     var toDate = moment(doctor.availableTo, 'DD/MM/YYYY').toDate();
    //     var fromDate = moment(doctor.availablefrom, 'DD/MM/YYYY').toDate();
    //     var AvailTo = this.getCorrectDate(toDate);
    //     var AvailFrom = this.getCorrectDate(fromDate);

    //     console.log("book " + this.bookDate);

    //     if ((fromDate >= AvailFrom && fromDate <= AvailTo)) {
    //       console.log(doctor.physician_email);
    //       var doctors: availability = {
    //         name: doctor.physician_email.split('.')[0],
    //         email: doctor.physician_email,
    //         dept: doctor.physician_email.split('.')[1].split('@')[0],
    //         availablefrom: this.getCorrectDate(
    //           moment(doctor.availablefrom, 'DD/MM/YYYY').toDate()
    //         ),
    //         availableTo: AvailTo,
    //       };
    //       this.doctorsList.push(doctors);
    //     }
    //   }
    // });

    console.log(this.doctorsList);
  }

  //TODAY'S DATE in 26/07/2022 string format for posting purpose
  d = new Date();
  todayDate =
    this.d.getDate() +
    '/' +
    (this.d.getMonth() + 1) +
    '/' +
    this.d.getFullYear();

  //SETS APPOINTMENT OBJECT WHILE BOOKING DOCTOR

  setAppointment(email: string) {
    this.newAppointment.reason = '';
    this.newAppointment.acceptance = 0;
    this.newAppointment.submissionDate = this.todayDate;
    this.newAppointment.patientId = JSON.parse(
      localStorage.getItem('LoggedInUserId')!
    );
    this.newAppointment.physicianEmail = email;

    this.service.setAppointments(this.newAppointment);
  }

  //CHECKING METHODS
  logAppointment() {
    console.log(this.newAppointment);
  }

  //CONVERTS DATE IN A FORMAT THAT SUITS COMPARISON
  getCorrectDate(date: Date) {
    var stringDate =
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    var newDate = new Date(stringDate);
    return newDate;
  }
}
