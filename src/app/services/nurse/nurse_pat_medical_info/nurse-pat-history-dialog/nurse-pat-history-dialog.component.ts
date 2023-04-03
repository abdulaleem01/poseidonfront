import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePatientService } from 'src/app/Patient/service-patient.service';


export interface TestDetails {
  id: number;
  visitDetailsId: number;
  testName: string;
  result: string;
  notes: string;
}

@Component({
  selector: 'app-nurse-pat-history-dialog',
  templateUrl: './nurse-pat-history-dialog.component.html',
  styleUrls: ['./nurse-pat-history-dialog.component.css']
})
export class NursePatHistoryDialogComponent {
  constructor(private dialogRef: MatDialogRef<NursePatHistoryDialogComponent>,private service: ServicePatientService) {

  }

  tList: any = [];
  testList: TestDetails[] = [];
  testData: any;
  ngOnInit() {

    this.getTests();
  }

  getTests() {
    this.service
      .getTestForAVisit(JSON.parse(localStorage.getItem('currentVisitId')!))
      .subscribe((res) => {
        this.tList = res;
        for (var t of this.tList) {
          var te: TestDetails = {
            id: t.id,
            visitDetailsId: t.visitDetailsId,
            testName: t.testName,
            result: t.result,
            notes: t.notes,
          };
          this.testList.push(te);
        }
        console.log(this.testList);
        // this.tList = res;
        this.testData = new MatTableDataSource(this.testList);
      });
  }

  displayedColumns: string[] = ['Id', 'TestName', 'Result', 'Notes'];
  index: number = 0;
}
