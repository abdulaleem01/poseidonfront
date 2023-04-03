import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { NurseVitalContentComponent } from '../../nurse-vital-content/nurse-vital-content.component';
import { items, ServicenurseService } from '../../servicenurse.service';


@Component({
  selector: 'app-nurse-appointment-content',
  templateUrl: './nurse-appointment-content.component.html',
  styleUrls: ['./nurse-appointment-content.component.css']
})
export class NurseAppointmentContentComponent implements OnInit {
  patientArray: any[]=[];
  currentDate = new Date();
  constructor(private dialog: MatDialog, private router: Router ,private service:ServicenurseService) 
  {
   
  }
  infoDialog(element:any) {
    const dRef = this.dialog.open(NurseVitalContentComponent, {
      width: '500px',
      data: {
  
      }
    });
    this.service.myData=element;
    dRef.afterClosed().subscribe(result => {
      console.log(`result is ${result}`)
    })
  }

  tomedic_info(data:any)
  {
    this.service.medPatientData=data;
    this.router.navigate(['nurse-pat-info'])
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   
  ngOnInit() 
  {


    this.fetechappointment();
 
  }

dataSource:any;
fetechappointment()
{
  this.service.getData().subscribe(data=>
    {
      
      let listArray: any[]=[];
      
      data.forEach( (element: any) => {
        if(element.acceptance==1){
          listArray.push(element);
          this.service.getPatientData(element.patientId).subscribe((data:any)=>{
          this.patientArray.push(data);
          });
        }
      });
    
      this.dataSource=new MatTableDataSource(listArray);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
      console.log(listArray);

    })
}
patName(data:any):any{
  for(let item of this.patientArray){
  if(item.id==data.patientId){
      return item.firstName +" "+ item.lastName;
  }
}
}

  public displayedColumns: string[] = ['ID','Patient Name', 'Booked On', 'Key Notes', 'Diagnosis', 'Medical History'];
 






}
