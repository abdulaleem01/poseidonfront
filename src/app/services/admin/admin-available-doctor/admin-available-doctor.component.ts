import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { getAvailableDoc, getDocbyEmail, AdminServiceService } from '../admin-service.service';
import { NewAvailabilityComponent } from '../new-availability/new-availability.component';

@Component({
  selector: 'app-admin-available-doctor',
  templateUrl: './admin-available-doctor.component.html',
  styleUrls: ['./admin-available-doctor.component.css']
})

export class AdminAvailableDoctorComponent implements OnInit {

  availableDocs!: getAvailableDoc[];

  doctor_objects: getDocbyEmail[] = [];

  constructor(private router: Router, private adminservice: AdminServiceService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAvailableDoctors();
  }

  dataSource: any;

  getAvailableDoctors() {
    this.adminservice.getAvailableDoctor().subscribe(data => {
      this.availableDocs = data;
      // console.log(data);

      this.availableDocs.forEach(element => {
        if (element.availableFrom != "none") {
          this.adminservice.getDoctorsbyEmail(element.doctorEmail).subscribe(response => {
            // console.log("respone");
            // console.log(response);
            this.doctor_objects.push(response);
            // console.log(this.doctor_objects);

            this.dataSource = new MatTableDataSource(this.doctor_objects);
            this.dataSource.paginator = this.paginator;
          })
        }
      });
    })
  }

  displayedColumns: string[] = ['ID', 'Doctor Name', 'Doctor Email', 'Specilization', 'Schedule'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  schedule(email: string) {
    const dRef = this.dialog.open(NewAvailabilityComponent, {
      width: '500px',
      data: { docemail: email }
    });
  }

  to_admin() {
    this.router.navigate(['adminhome'])
  }
}
