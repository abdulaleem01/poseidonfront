import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Patient_Info, AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-admin-patient-info',
  templateUrl: './admin-patient-info.component.html',
  styleUrls: ['./admin-patient-info.component.css']
})
export class AdminPatientInfoComponent implements OnInit {
  
  patients!: Patient_Info[];

  constructor(private router: Router, private adminservice: AdminServiceService)
  {}

  ngOnInit() {
    this.fetchPatients();
  }

  dataSource: any;

  fetchPatients()
  {
    this.adminservice.getallPatients().subscribe(data => 
      {
        this.patients = data;
        console.log(data);
        
        this.dataSource = new MatTableDataSource(this.patients);
        this.dataSource.paginator = this.paginator;
      })
  }

  displayedColumns: string[] = ['ID', 'Patient Name', 'Email', 'Phone'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  to_admin()
  {
    this.router.navigate(['adminhome'])
  }
}
