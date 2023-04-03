import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DoctorService } from 'src/app/doctor.service';

@Component({
  selector: 'app-doc-pat-med-history-test-dialog',
  templateUrl: './doc-pat-med-history-test-dialog.component.html',
  styleUrls: ['./doc-pat-med-history-test-dialog.component.css']
})
export class DocPatMedHistoryTestDialogComponent {

  testData:any;
  testResult:any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<DocPatMedHistoryTestDialogComponent>,public doc:DoctorService) {}
    
  // id
  // : 
  // 38
  // notes
  // : 
  // "heavy leakage"
  // result
  // : 
  // "success"
  // testName
  // : 
  // "urine test




   ngOnInit(){
    console.log(this.data.dataKey)
    const vid = this.data.dataKey;
    this.doc.GetTestResultsByVisitId(vid).subscribe(response =>{
      console.log(response);
      this.testData = new MatTableDataSource(response);
    })

   }
    
  
   Tests: TestDetails[] = [
     { Id: 1, TestName: "Eye", Result: "good", Notes: "use computer glass" },
     { Id: 2, TestName: "Eye", Result: "good", Notes: "use computer glass" },
    { Id:3, TestName: "Eye", Result: "good", Notes: "use computer glass" },
   ];
  

  displayedColumns: string[] = ['Id','TestName','Result','Notes'];
}





export interface TestDetails {
  Id : number,	
  TestName:string,	
  Result:string,	
  Notes:string,

} 

