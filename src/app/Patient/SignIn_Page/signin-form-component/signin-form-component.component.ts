import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
} from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { ServicePatientService } from '../../service-patient.service';
import { pipe, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
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
import { MatSnackBar } from '@angular/material/snack-bar';

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
  selector: 'app-signin-form-component',
  templateUrl: './signin-form-component.component.html',
  styleUrls: ['./signin-form-component.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class SigninFormComponentComponent {
  newPassword: string;
  confirmPassword: string;
  passMatch: boolean = true;

  checkPassword() {
    if (this.confirmPassword.length != 0) {
      if (this.confirmPassword != this.newPassword) {
        this.passMatch = false;
        console.log('passwords not matching');
        this.snackbar.open('passwords are not matching', 'Ok', {
          duration: 3000,
        });
      } else {
        this.passMatch = true;
        console.log('passwords matching');
      }
    }
  }

  constructor(
    private service: ServicePatientService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  date = new FormControl(moment());
  EmailExist: boolean;
  PhoneExist: boolean;

  isExistEmail(f: any) {
    this.service.isExistEmail(f).subscribe((res) => {
      if (res == true) {
        this.snackbar.open('Email already exists', 'Ok', {
          duration: 3000,
        });
        this.EmailExist = true;
      } else {
        this.EmailExist = false;
      }
    });
  }

  isExistPhone(f: any) {
    this.service.isExistPhone(f).subscribe((res) => {
      if (res == true) {
        this.snackbar.open('Phone already exists', 'Ok', {
          duration: 3000,
        });
        this.PhoneExist = true;
      } else {
        this.PhoneExist = false;
      }
    });
  }

  onSubmit(f: NgForm) {
    this.service
      .addPatient(f)
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
        alert('Registered successfully');
        this.router.navigate(['service_home']);
      });

    console.log(f);
  }

  getValue(f: any) {
    console.log(f);
  }
}
