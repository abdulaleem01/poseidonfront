import { Component } from '@angular/core';
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
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-pat-reason-dialog',
  templateUrl: './pat-reason-dialog.component.html',
  styleUrls: ['./pat-reason-dialog.component.css'],
})
export class PatReasonDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<PatReasonDialogComponent>,
    private service: ServicePatientService,
    private snackbar: MatSnackBar
  ) {}

  onSubmit(f: NgForm) {
    this.service
      .bookAppointment(f)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;
          console.log('failed');
          return throwError(error);
        })
      )
      .subscribe((response) => {
        // This is where you can handle the successful response
        this.snackbar.open('Appointment booked successfully', 'Ok', {
          duration: 3000,
        });
        this.service.sendBookedEmail().subscribe((res) => {
          console.log('email sent');
        });
        console.log('success');
      });
  }

  getValue(f: any) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
