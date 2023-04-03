import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminAddScheduleDialogComponent } from '../admin-add-schedule-dialog/admin-add-schedule-dialog.component';
import { AdminAvailDeleteDialogboxComponent } from '../admin-avail-delete-dialogbox/admin-avail-delete-dialogbox.component';
import { getAvailableDoc, getDocbyEmail, AdminServiceService } from '../admin-service.service';


// export interface showDocs {
//   email: string,
//   name: string,
//   dept: string,
//   availableFrom: string,
//   availableTo: string,
//   doctorEmail: string,
//   scheduleStatus: boolean
// }

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {

  scheduledDocs!: getAvailableDoc[];

  scheduled_doctors: getDocbyEmail[] = [];

  // showdocs: showDocs[] = [];

  constructor(private dialog: MatDialog, private router: Router, private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.getScheduledDoctors();
  }

  dataSource: any;

  getScheduledDoctors() {
    this.adminservice.getAvailableDoctorbyStatus().subscribe(data => {
      this.scheduledDocs = data;

      this.scheduledDocs.forEach(element => {
        this.adminservice.getDoctorsbyEmail(element.doctorEmail).subscribe(response => {
          this.scheduled_doctors.push(response);

          // const combinedObj: showDocs[] = this.scheduledDocs.map(doc => {
          //   const doc2 = this.scheduled_doctors.find(doc2 => doc2.email === doc.doctorEmail);
          //   return {...doc, ...doc2};
          // })
          this.dataSource = new MatTableDataSource(this.scheduled_doctors);
          this.dataSource.paginator = this.paginator;
        })
      })
    })

  }

  displayedColumns: string[] = ['ID', 'Doctor Name', 'Doctor Email', 'Specilization', 'info'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  infoDialogs(email: string) {
    const dRef = this.dialog.open(AdminAddScheduleDialogComponent, {
      width: '500px',
      data: { phyemail: email }
    });
  }

  delete_dialog(email: string) {
    const dRef = this.dialog.open(AdminAvailDeleteDialogboxComponent, {
      width: '500px',
      data: { phyemail: email }
    })
  }

  to_admin() {
    this.router.navigate(['adminhome'])
  }
}
