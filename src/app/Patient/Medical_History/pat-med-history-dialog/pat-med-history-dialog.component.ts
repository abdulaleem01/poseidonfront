import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ServicePatientService } from '../../service-patient.service';

export interface TestDetails {
  id: number;
  visitDetailsId: number;
  testName: string;
  result: string;
  notes: string;
}

@Component({
  selector: 'app-pat-med-history-dialog',
  templateUrl: './pat-med-history-dialog.component.html',
  styleUrls: ['./pat-med-history-dialog.component.css'],
})
export class PatMedHistoryDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<PatMedHistoryDialogComponent>,
    private service: ServicePatientService
  ) {}
  //  Tests: TestDetails[] = [
  //    { Id: 1, TestName: "Eye", Result: "good", Notes: "use computer glass" },
  //    { Id: 2, TestName: "Eye", Result: "good", Notes: "use computer glass" },
  //   { Id:3, TestName: "Eye", Result: "good", Notes: "use computer glass" },
  //  ];
  tList: any = [];
  testList: TestDetails[] = [];
  testData: any;
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

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
