import { Component,ViewChild,AfterViewInit,Input, SimpleChange } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DocMedInfoEditDialogComponent } from '../doc-med-info-edit-dialog/doc-med-info-edit-dialog.component';
import { DoctorService } from 'src/app/doctor.service';
import { Router } from '@angular/router';

export interface tests{
  Id: number;
  test: string;
  result: string;
  notes: string;

}

@Component({
  selector: 'app-doc-update-med-info-table',
  templateUrl: './doc-update-med-info-table.component.html',
  styleUrls: ['./doc-update-med-info-table.component.css']
})
export class DocUpdateMedInfoTableComponent {
  @Input() TestId:number;
  constructor(private dialog: MatDialog,public doc:DoctorService,public router :Router) {
    
  }
  @ViewChild('paginator') paginator: MatPaginator;

  // testList: tests[] = [
  //     { Id: 1, test: "Eye", result: "good", notes: "use computer glass" },
  //    { Id: 2, test: "Eye",result: "good", notes: "use computer glass" },
  //   { Id:3, test: "Eye", result: "good", notes: "use computer glass" }
  // ];
  // testList:tests[];
  listOfTest:any;
  // listOfTest = new MatTableDataSource(this.testList);
  displayedColumns:string[] = ['Id', 'test', 'notes', 'result','edit','delete'];

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    // this.doc.GetVisitDetailsByAcceptanceId(this.id).subscribe(response =>{
    //   console.log(response);
    //   this.myVisitDetails = response;

    console.log("myvs ssssjsjs id"+this.TestId)

    this.doc.GetTestResultsByVisitId(this.TestId).subscribe(response =>{
      console.log(response);
      // this.testList = response;
      this.listOfTest = new MatTableDataSource(response);

    })
    this.listOfTest.paginator = this.paginator;



  }
  
 
    openEditObservation(testId:number) {
      console.log(testId)
      this.doc.TestId = testId;
       const prescription = this.dialog.open(DocMedInfoEditDialogComponent, {
      data: {},
      width: '40%'
    });
  }

    DeleteTest(id:number){
      this.doc.DeleteTest(id).subscribe(response =>{
        console.log(response);
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/update_medInfo']);
        });
      })
    }
    
  }


