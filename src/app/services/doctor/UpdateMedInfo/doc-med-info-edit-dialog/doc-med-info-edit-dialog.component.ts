import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule,NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/doctor.service';
import { Router } from '@angular/router';
import { DocUpdateMedInfoTableComponent } from '../doc-update-med-info-table/doc-update-med-info-table.component';
@Component({
  selector: 'app-doc-med-info-edit-dialog',
  templateUrl: './doc-med-info-edit-dialog.component.html',
  styleUrls: ['./doc-med-info-edit-dialog.component.css']
})

export class DocMedInfoEditDialogComponent {

  test:string;
  result:string;
  notes:string;
constructor(private dialog: MatDialogRef<DocMedInfoEditDialogComponent>,public doc:DoctorService,public router:Router) {}



   onSubmit(f: any) {
    const TestDetails=  new TestDetail(this.doc.VisitId,f.Test,f.Result,f.Notes);
    // console.log(f,this.doc.TestId,this.doc.VisitId);
    // console.log(TestDetails)
    this.doc.PutUpdateTest(this.doc.TestId,TestDetails).subscribe(response =>{
      console.log(response);
      alert("updated!!");
      // window.location.reload();
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/update_medInfo']);
      });


      const mynum:Number = this.doc.appointment_num;
      // this.router.navigate(['/update_medInfo',mynum]);
      

    //   this.router.navigateByUrl(' ', { skipLocationChange: true }).then(() => {
    //     this.router.navigate(['update_medInfo']);
    // }); 

    })

    this.dialog.close()


  
  }
  getValue(f:any) {
    
  }

  onNoClick(){
    
    this.dialog.close()
  }
}

// "visitDetailsId": 84,
//   "testName": "X-ray",
//   "result": "Very Good",
//   "notes": "Better and Strong Bones"

export class TestDetail{
  
  VisitId:number;
  TestName:string;
  Result:string;
  Notes:string;

  constructor(vid:number,tname:string,res:string,note:string){

    this.VisitId = vid;
    this.TestName = tname;
    this.Result = res;
    this.Notes = note;
}

  
}