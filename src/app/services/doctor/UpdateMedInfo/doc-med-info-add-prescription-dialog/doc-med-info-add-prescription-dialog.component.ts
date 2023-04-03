import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule,NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-med-info-add-prescription-dialog',
  templateUrl: './doc-med-info-add-prescription-dialog.component.html',
  styleUrls: ['./doc-med-info-add-prescription-dialog.component.css']
})
export class DocMedInfoAddPrescriptionDialogComponent {

  constructor(private dialog: MatDialogRef<DocMedInfoAddPrescriptionDialogComponent>,public doc:DoctorService,public router:Router) {
    
  }

   onSubmit(f: any) {
    console.log(f);
    const vid:number = this.doc.VisitId;
    const myPres = new Prescription(vid,f.Medicine,f.Dosage,f.Notes)
    this.doc.AddPriscription(myPres).subscribe(response =>{
      console.log(response);
      alert("Prescription Added Successfully")
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/update_medInfo']);
    })
  })
    this.dialog.close()

  }
  getValue(f:any) {
    
  }

  onNoClick(){
    this.dialog.close()
  }
}

export class Prescription{
  // "id": 0,
  // "visitDetailsId": 85,
  // "prescriptionName": "Crocin",
  // "dosage": "3 tabs",
  // "notes": "Please use it"
  visitDetailsId:number;
  prescriptionName:string;
  dosage:string;
  notes:string;

  constructor(vid:number,pName:string,dos:string,note:string){
    this.visitDetailsId=vid;
    this.prescriptionName = pName;
    this.dosage = dos;
    this.notes = note;
  }



}
