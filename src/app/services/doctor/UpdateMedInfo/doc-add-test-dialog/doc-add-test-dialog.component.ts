import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule,NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/doctor.service';
import { TestDetail } from '../doc-med-info-edit-dialog/doc-med-info-edit-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doc-add-test-dialog',
  templateUrl: './doc-add-test-dialog.component.html',
  styleUrls: ['./doc-add-test-dialog.component.css']
})
export class DocAddTestDialogComponent {
  constructor(private dialog: MatDialogRef<DocAddTestDialogComponent>,public doc:DoctorService,public router:Router) {
    
  }

   onSubmit(f: any) {
    console.log(f);
    const vid = this.doc.VisitId;
    const myTest = new TestDetail1(vid,f.Test,f.Result,f.Notes);
    this.doc.AddTest(myTest).subscribe(response =>{
      console.log(response);
      alert("Added new Test");
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/update_medInfo']);
    });
    this.dialog.close()

  })
}
  getValue(f:any) {
    
  }

  onNoClick(){
    this.dialog.close()
  }

}

export class TestDetail1{

  
visitDetailsId:number;
testName:string;
result:string;
notes:string;

  constructor(vid:number,tname:string,res:string,note:string){

    this.visitDetailsId = vid;
    this.testName = tname;
    this.result = res;
    this.notes = note;
}
}
