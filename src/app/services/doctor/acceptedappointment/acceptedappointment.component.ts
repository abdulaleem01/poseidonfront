import { AfterViewInit,Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DoctorService } from 'src/app/doctor.service';
import { Router } from '@angular/router';
import { Appointments } from 'src/app/appointments';
import { formatDate } from '@angular/common';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-acceptedappointment',
  templateUrl: './acceptedappointment.component.html',
  styleUrls: ['./acceptedappointment.component.css']
})
export class AcceptedappointmentComponent {


 

  displayedColumns: string[] = ['id', 'name', 'bookeddate', 'notes','button1','button2'];
  // dataSource: MatTableDataSource<UserData>;
  // dataSource = new MatTableDataSource<any>(this.doc.Patient_Details);
  dataSource:any;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public doc:DoctorService,private router: Router) {
    // this.dataSource = new MatTableDataSource<any>(this.appointments)
    // this.dataSource.paginator = this.paginator;

  }
  appointments = new Array<Appointments>();
  patient_names = new Map();
  myDate = new Date();
  newDate?:string;


  ngOnInit():void{
    console.log(this.doc.Doctor_name);
    console.log(this.myDate)
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    const cValue = formatDate(this.myDate, 'dd-MM-yyyy', 'en-US');
    const nDate = cValue.replace(/-/g,"/");

    console.log(nDate)


    this.doc.GetByAcceptanceDoctorEmailDate(2,nDate,this.doc.Doctor_name).subscribe(Response =>{
      this.appointments = Response;
      console.log(Response);
      console.log(this.appointments);
      
      for(const key in this.appointments){
        console.log(key,this.appointments[key].patientId)
        this.doc.GetPatientDetailsByID(this.appointments[key].patientId).subscribe(response =>{
          this.patient_names.set(this.appointments[key].patientId,response.firstName)
        })
}
      
      
      this.dataSource = new MatTableDataSource<any>(this.appointments);
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })

    
}

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  to_updateMedInfo(id:number) {
    this.router.navigate(['/update_medInfo']);
    this.doc.appointment_num = id;
  }

  toCompleteConsultation(id:number){
    console.log(id);
    this.doc.PutAcceptancebyId(id,3).subscribe(response =>{
      console.log(response);
      alert("Completed Successfully!!!")
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/docacceptedappointments']);
    }); 
    })

  }

}
