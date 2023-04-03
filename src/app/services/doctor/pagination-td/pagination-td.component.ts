import { Component, inject, Output, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DoctorService } from 'src/app/doctor.service';
import {MatDialog} from '@angular/material/dialog';
import { Appointments } from 'src/app/appointments';
import { Route, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-pagination-td',
  templateUrl: './pagination-td.component.html',
  styleUrls: ['./pagination-td.component.css']
})


export class PaginationTdComponent {
  constructor(public router:Router,public doc:DoctorService,public dialog: MatDialog , public myauth:AuthService){}
  appointments = new Array<Appointments>();
  dataSource:any;



 

  displayedColumns: string[] = ['Index', 'Name', 'Age', 'date','Gender','button1','button2'];
  patient_names = new Map();


  @ViewChild(MatPaginator) paginator: MatPaginator;

 

  

    ngOnInit():void{
      console.log(this.doc.Doctor_name);
      this.doc.GetAppointmentsByAceptanceEmail(0,this.doc.Doctor_name).subscribe(Response =>{
        this.appointments = Response;
        console.log(Response);
        console.log(this.appointments);
        // for (const key in data) {
        //   console.log(key, data[key]);
        // }
        for(const key in this.appointments){
          console.log(key,this.appointments[key].patientId)
          // this.patient_names.set(key,this.doc.GetPatientDetailsByID())
          this.doc.GetPatientDetailsByID(this.appointments[key].patientId).subscribe(response =>{
            this.patient_names.set(this.appointments[key].patientId,response.firstName)
          })
}
        
        // const index = Array.from(Array(this.appointments.length).keys()).map(x => x + 1);
        
        this.dataSource = new MatTableDataSource<any>(this.appointments);
        
        this.dataSource.paginator = this.paginator;})
        // this.getPatByID(11);

      
}

getPatByID(id:Number){
  const name = this.doc.GetPatientDetailsByID(id).subscribe(async Response =>{return await Response.firstName;})
  console.log(name);
  return  name

}
    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    // }

  onAcceptHandler(i:any,patientId:number){
    // alert("wow");
    console.log(i);
    this.dialog.open(DialogElementsExampleDialog);
    this.doc.appointment_num = i;
    this.doc.EmailPatientId = patientId;


  

  }

  // onCloseHandler(){
  //   this.dialog.closeAll();
  // }

  onRejectHandler(i:number,patientId:number){
    this.dialog.open(DialogElementsForReject);
    this.doc.appointment_num = i;
    this.doc.EmailPatientId = patientId;


  }


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
  
@Component({
  selector: 'dialog-elements-example-dialog',
  template:`
  <h1 class="dv d" mat-dialog-title>Accept Appointment</h1>
<div class="dv" mat-dialog-content>Press Confirm for Accepting Appointment or Close for not Accepting</div>
<div class="dv" mat-dialog-actions>
  <br>
  <button class=" dv button isdark b" mat-button mat-dialog-close (click)="closeHandler()">Close</button>
  &nbsp;
  <button class=" dv button isactive  b" mat-button mat-dialog-close (click)="acceptHandler()">Confirm</button>

</div>
  `,
  styleUrls:['./pagination-td.component.css'],

  
})
export class DialogElementsExampleDialog {
  dialogStatus:any=false;

  constructor(public router:Router,public dialog: MatDialog,public doc:DoctorService){}

  closeHandler(){
    this.dialog.closeAll();
  }

  acceptHandler(){
    console.log('Appointment Accepted',this.doc.appointment_num);
    this.doc.PutAcceptancebyId(this.doc.appointment_num,1).subscribe(response =>{
      alert(response+"accepted");
      console.log(response);
    this.doc.GetPatientDetailsByID(this.doc.EmailPatientId).subscribe(response=>{
        this.doc.EmailSender(response.email,1).subscribe(response=>{
          console.log(response);
        })
      })
      // this.doc.EmailSender()

      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/doctdapp']);
    }); 

    })
  //   this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['Your actualComponent']);
  // }); 
    this.dialog.closeAll();
    

  }
}

@Component({
  selector: 'dialog-elements-example-reject',
  template:`
  <h1 class="dv d" mat-dialog-title>Reject Appointment</h1>
<div class="dv" mat-dialog-content>Press Confirm for Rejecting Appointment or Close for not Rejecting</div>
<div class="dv" mat-dialog-actions>
  <br>
  <button class=" dv button isdark b" mat-button mat-dialog-close (click)="closeHandler()">Close</button>
  &nbsp;
  <button class=" dv button isactive  b" mat-button mat-dialog-close (click)="acceptHandler()">Confirm</button>

</div>
  `,
  styleUrls:['./pagination-td.component.css'],

  
})
export class DialogElementsForReject {
  dialogStatus:any=false;

  constructor(public dialog: MatDialog,public router:Router,public doc:DoctorService){}

  closeHandler(){
    this.dialog.closeAll();
  }

  acceptHandler(){
    console.log('Appointment Rejected',this.doc.appointment_num);
    this.doc.PutAcceptancebyId(this.doc.appointment_num,4).subscribe(response =>{
      alert(response+"accepted");
      console.log(response);
      this.doc.GetPatientDetailsByID(this.doc.EmailPatientId).subscribe(response=>{
        this.doc.EmailSender(response.email,4).subscribe(response=>{
          console.log(response);
        })
      })

      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/doctdapp']);
    }); 

    })
    this.dialog.closeAll();

  }
}

// @Component({
//   selector: 'dialog-elements-example-Reject',
//   template:`
//   <h1 class="dv d" mat-dialog-title>Accept Appointment</h1>
// <div class="dv" mat-dialog-content>Press Confirm for Accepting Appointment or Close for not Accepting</div>
// <div class="dv" mat-dialog-actions>
//   <br>
//   <button class=" dv button isdark b" mat-button mat-dialog-close (click)="closeHandler()">Close</button>
//   &nbsp;
//   <button class=" dv button isactive  b" mat-button mat-dialog-close (click)="acceptHandler()">Confirm</button>

// </div>
//   `,
//   styleUrls:['./pagination-td.component.css'],

// })

