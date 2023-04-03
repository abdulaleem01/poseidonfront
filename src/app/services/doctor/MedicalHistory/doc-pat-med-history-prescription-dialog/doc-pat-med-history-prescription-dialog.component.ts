import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DoctorService } from 'src/app/doctor.service';

@Component({
  selector: 'app-doc-pat-med-history-prescription-dialog',
  templateUrl: './doc-pat-med-history-prescription-dialog.component.html',
  styleUrls: ['./doc-pat-med-history-prescription-dialog.component.css']
})
export class DocPatMedHistoryPrescriptionDialogComponent {
 constructor(private dialogRef: MatDialogRef<DocPatMedHistoryPrescriptionDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,public doc:DoctorService) {
    
  }
  Prescription:any;
  


  ngOnInit(){
    const vid = this.data.dataKey;
    this.doc.ViewPrescription(vid).subscribe(response =>{
      console.log(response);
      this.Prescription = new MatTableDataSource(response);

    })

  }
 
  

  displayedColumns: string[] = ['Id','TestName','Result','Notes'];
}





export interface PrescriptionData {
  Id : number,	
  Medicine:string,	
  Dosage:string,	
  Notes:string,

} 
