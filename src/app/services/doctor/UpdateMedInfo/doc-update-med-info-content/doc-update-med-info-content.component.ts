import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DocAddTestDialogComponent } from '../doc-add-test-dialog/doc-add-test-dialog.component';
import { DocMedInfoAddPrescriptionDialogComponent } from '../doc-med-info-add-prescription-dialog/doc-med-info-add-prescription-dialog.component';
import { DocMedInfoEditDialogComponent } from '../doc-med-info-edit-dialog/doc-med-info-edit-dialog.component';
import { DocMedInfoViewPrescriptionDialogComponent } from '../doc-med-info-view-prescription-dialog/doc-med-info-view-prescription-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/doctor.service';
import { DocUpdateMedInfoTableComponent } from '../doc-update-med-info-table/doc-update-med-info-table.component';
@Component({
  selector: 'app-doc-update-med-info-content',
  templateUrl: './doc-update-med-info-content.component.html',
  styleUrls: ['./doc-update-med-info-content.component.css']
})
export class DocUpdateMedInfoContentComponent {
  id: number;
  private sub: any;
  public myVisitDetails:any;
  public allergies:any;
  constructor(private dialog: MatDialog,private router:Router,private act: ActivatedRoute,public doc:DoctorService) {
    
  }

  ngOnInit() {
    // this.sub = this.act.params.subscribe(params => {
      //  this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    // });

    this.id = this.doc.appointment_num;
    this.doc.GetVisitDetailsByAcceptanceId(this.id).subscribe(response =>{
      console.log(response);
      this.myVisitDetails = response;
      this.doc.VisitId = response.id;
      this.doc.PatientId = response.patientId;

      this.doc.GetAllergyDetailsByVisitID(response.id).subscribe(response =>{
        console.log(response);
        this.allergies = response;
      })
})
   

    // console.log(this.allergies+"sss");
    // console.log(this.id)
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  openViewPrescription() {
    const prescription = this.dialog.open(DocMedInfoViewPrescriptionDialogComponent, {
      data: {},
      width: '40%'
    });



  }

   openAddPrescription() {
    const prescription = this.dialog.open(DocMedInfoAddPrescriptionDialogComponent, {
      data: {},
      width: '40%'
    });
   }
  
  openAddNewObservation() {
       const prescription = this.dialog.open(DocAddTestDialogComponent, {
      data: {},
      width: '40%'
    });
  }

  to_MedHistory() {
   this.router.navigate(['doc/patient_medicalHistory']);
  }

  to_appointments() {
    this.router.navigate(['/docacceptedappointments']);

  }
   
  }



