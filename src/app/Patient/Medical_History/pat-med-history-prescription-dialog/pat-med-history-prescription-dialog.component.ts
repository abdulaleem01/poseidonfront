import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialogRef } from '@angular/material/dialog';
import { ServicePatientService } from '../../service-patient.service';

export interface PrescriptionData {
  id: number;
  visitDetailsId: number;
  prescriptionName: string;
  dosage: string;
  notes: string;
}

@Component({
  selector: 'app-pat-med-history-prescription-dialog',
  templateUrl: './pat-med-history-prescription-dialog.component.html',
  styleUrls: ['./pat-med-history-prescription-dialog.component.css'],
})
export class PatMedHistoryPrescriptionDialogComponent implements OnInit {
  prescriptionList: any = [];
  listOfPrescription: PrescriptionData[] = [];
  PrescriptionData: any;

  constructor(
    private dialogRef: MatDialogRef<PatMedHistoryPrescriptionDialogComponent>,
    private service: ServicePatientService
  ) {}
  // Prescriptions: PrescriptionData[] = [
  //   { Id: 1, Medicine: 'Paracetamol', Dosage: '1-0-1', Notes: 'after food' },
  //   { Id: 2, Medicine: 'Dolo', Dosage: '1-0-1', Notes: 'after food' },
  //   { Id: 3, Medicine: 'Pan40', Dosage: '1-0-1', Notes: 'after food' },
  // ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
