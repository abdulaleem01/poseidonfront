import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { NurseAppointmentContentComponent } from '../nurse_appointment/nurse-appointment-content/nurse-appointment-content.component';
import { ServicenurseService } from '../servicenurse.service';

@Component({
  selector: 'app-nurse-vital-content',
  templateUrl: './nurse-vital-content.component.html',
  styleUrls: ['./nurse-vital-content.component.css']
})
export class NurseVitalContentComponent implements OnInit {

  constructor(private vitalsService: ServicenurseService, private dialogRef: MatDialogRef<NurseVitalContentComponent>, private router: Router, private formBuilder: FormBuilder) { }
  doctorName: any;
  isval: string = "false";
  selectedValues: string[] = [];
  allergyList: string[] = ['Skin Allergy', 'Dust Allergy', 'Insect Allergy', 'Pet Allergy', 'Food Allergy'];


  sendData(bp: number, rr: number, temp: number, height: number, weight: number, notes: string, bps: number, bg: string) {

    this.vitalsService.postData(bp, rr, temp, height, weight, notes, bps, bg).subscribe(data => {
      if (data) {
        console.log("in sendData");
        this.vitalsService.myData.acceptance = 2;
        this.vitalsService.update(this.vitalsService.myData).subscribe(res => {
          console.log(res);
        })
      }
      this.isval = "true";
      this.vitalsService.getMedicalHistory(data.patientId).subscribe(data => {
        this.allergyData(data[data.length - 1].id)
      });
      this.router.navigateByUrl('', {skipLocationChange: true}).then(() => {
        this.router.navigate(['nurse_appointment'])
      })
    })

    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.vitalsService.getDoctorData(this.vitalsService.myData.physicianEmail).subscribe((data) => {
      this.doctorName = data.name;
    })

  }
  close() {
    this.dialogRef.close();
  }
  allergyData(id: any) {
    if (this.isval == "true") {
      console.log(this.selectedValues.forEach((d) => console.log(d)));
      this.selectedValues.forEach(data => {
        this.vitalsService.postAllergy(data, id).subscribe((element) => { console.log(element) });
      });
    }
  }
}
