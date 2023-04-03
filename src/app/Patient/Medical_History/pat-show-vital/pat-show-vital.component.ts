import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePatientService } from '../../service-patient.service';

export interface VitalList {
  VitalName: string;
  Value: string;
}

export interface vitals {
  bp: string;
  temp: string;
  ht: string;
  wt: string;
  spo2: string;
  allergies: string;
}

export interface visitDetail {
  id: number;
  patientId: number;
  height: number;
  weight: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  bodyTemperature: number;
  respirationRate: number;
  bloodGroup: string;
  nurseEmail: string;
  physicianEmail: string;
  appointmentId: number;
  keyNotes: string;
}

@Component({
  selector: 'app-pat-show-vital',
  templateUrl: './pat-show-vital.component.html',
  styleUrls: ['./pat-show-vital.component.css'],
})
export class PatShowVitalComponent {
  constructor(
    private dialogRef: MatDialogRef<PatShowVitalComponent>,
    private service: ServicePatientService
  ) {}
  // Tests: TestDetails[] = [
  //   { Id: 1, VitalName: 'Blood Pressure', VitalResult: '120/80 mm HG' },
  //   { Id: 2, VitalName: 'Temperature ', VitalResult: '102' },
  //   { Id: 3, VitalName: 'Height ', VitalResult: '174 cm' },
  //   { Id: 4, VitalName: 'Weight ', VitalResult: '65 kg' },
  //   { Id: 5, VitalName: 'Sugar Level ', VitalResult: '140 mg/dl' },
  //   {
  //     Id: 6,
  //     VitalName: 'Allergies ',
  //     VitalResult: 'Pet allergy, Dust allergy',
  //   },
  // ];
  newVitals: visitDetail;
  listOfVitals: VitalList[] = [];
  vitalData: any;
  newAllergies: any;

  getVitals() {
    this.service
      .getVitals(JSON.parse(localStorage.getItem('currentVisitId')!))
      .subscribe((res: visitDetail) => {
        this.newVitals = res;
        var bp: VitalList = {
          VitalName: 'Blood Pressure',
          Value:
            ' ' +
            this.newVitals.bloodPressureSystolic +
            ' / ' +
            this.newVitals.bloodPressureDiastolic +
            ' mm/Hg',
        };

        var temp: VitalList = {
          VitalName: 'Body Temperature',
          Value: ' ' + this.newVitals.bodyTemperature + ' F',
        };

        var ht: VitalList = {
          VitalName: 'Height',
          Value: ' ' + this.newVitals.height + ' CM',
        };

        var wt: VitalList = {
          VitalName: 'Weight',
          Value: ' ' + this.newVitals.weight + ' KG',
        };

        var spo2: VitalList = {
          VitalName: 'SPO2',
          Value: ' ' + this.newVitals.respirationRate + ' %',
        };

        this.listOfVitals.push(bp);
        this.listOfVitals.push(temp);
        this.listOfVitals.push(ht);
        this.listOfVitals.push(wt);
        this.listOfVitals.push(spo2);

        this.service
          .getAllergies(JSON.parse(localStorage.getItem('currentVisitId')!))
          .subscribe((res) => {
            this.newAllergies = res;
            var allergyNames: string = '';
            for (var allergy of this.newAllergies) {
              allergyNames = allergyNames + ',' + allergy.allergyName;
            }
            var aller: VitalList = {
              VitalName: 'Allergies',
              Value: allergyNames,
            };
            this.listOfVitals.push(aller);
            this.vitalData = new MatTableDataSource(this.listOfVitals);
          });
      });

    console.log(this.vitalData);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getVitals();
  }

  displayedColumns: string[] = ['Id', 'Vitals', 'Values'];
  index: number = 0;
}
