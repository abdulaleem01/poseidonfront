import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialogRef } from '@angular/material/dialog';
import { ServicePatientService } from 'src/app/Patient/service-patient.service';

export interface PrescriptionData {
  id: number;
  visitDetailsId: number;
  prescriptionName: string;
  dosage: string;
  notes: string;
}


@Component({
  selector: 'app-nurse-pat-history-prescription',
  templateUrl: './nurse-pat-history-prescription.component.html',
  styleUrls: ['./nurse-pat-history-prescription.component.css']
})
export class NursePatHistoryPrescriptionComponent {
  constructor(private dialogRef: MatDialogRef<NursePatHistoryPrescriptionComponent>,private service: ServicePatientService) {

  }
  prescriptionList: any = [];
  listOfPrescription: PrescriptionData[] = [];
  PrescriptionData: any;




  ngOnInit(): void {
    this.getPrescription();
  }

  getPrescription() {
    this.service
      .getPrescription(JSON.parse(localStorage.getItem('currentVisitId')!))
      .subscribe((res) => {
        this.prescriptionList = res;
        for (var p of this.prescriptionList) {
          var pres: PrescriptionData = {
            id: p.id,
            visitDetailsId: p.visitDetailsId,
            prescriptionName: p.prescriptionName,
            dosage: p.dosage,
            notes: p.notes,
          };
          this.listOfPrescription.push(pres);
        }
        console.log(this.prescriptionList);

        this.PrescriptionData = new MatTableDataSource(this.listOfPrescription);
      });
  }

  displayedColumns: string[] = ['Id', 'Medicine', 'Dosage', 'Notes'];
  index: number = 0;
}
