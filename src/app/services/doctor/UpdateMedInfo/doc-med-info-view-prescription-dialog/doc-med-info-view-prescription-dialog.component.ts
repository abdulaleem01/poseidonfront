import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorService } from 'src/app/doctor.service';
export interface PrescriptionData {
  Id : number,	
  Medicine:string,	
  Dosage:string,	
  Notes:string,

} 
@Component({
  selector: 'app-doc-med-info-view-prescription-dialog',
  templateUrl: './doc-med-info-view-prescription-dialog.component.html',
  styleUrls: ['./doc-med-info-view-prescription-dialog.component.css']
})
export class DocMedInfoViewPrescriptionDialogComponent {
  Prescription:any;
  constructor(private dialog: MatDialogRef<DocMedInfoViewPrescriptionDialogComponent>,public doc:DoctorService) {
    
  }

  //  Prescriptions: PrescriptionData[] = [
  //   { Id: 1, Medicine: "Paracetamol", Dosage: "1-0-1", Notes: "after food" },
  //   { Id: 2, Medicine: "Dolo", Dosage: "1-0-1", Notes: "after food" },
  //    { Id: 3, Medicine: "Pan40", Dosage: "1-0-1", Notes: "after food" },
    
  // ];

//   dosage
// : 
// "3 tabs"
// id
// : 
// 12
// notes
// : 
// "Please use it"
// prescriptionName
// : 
// "Crocin"
// visitDetailsId
// : 
// 85
  

  displayedColumns: string[] = ['Id','TestName','Result','Notes'];

  ngOnInit(){
    this.doc.ViewPrescription(this.doc.VisitId).subscribe(response=>{
      console.log(response);
      this.Prescription = new MatTableDataSource(response);

    })
  }
}
