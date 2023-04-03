import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './Patient/Home_Page/navbar-component/navbar-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentComponent } from './Patient/Home_Page/home-component/home-component.component';
import { LoginComponentComponent } from './Patient/Login_Page/login-component/login-component.component';
import { LoginFormComponentComponent } from './Patient/Login_Page/login-form-component/login-form-component.component';
import { LoginNavbarComponentComponent } from './Patient/Login_Page/login-navbar-component/login-navbar-component.component';
import { HomeContentComponent } from './Patient/Home_Page/home-content/home-content.component';
import { SigninComponentComponent } from './Patient/SignIn_Page/signin-component/signin-component.component';
import { SigninNavbarComponentComponent } from './Patient/SignIn_Page/signin-navbar-component/signin-navbar-component.component';
import { SigninFormComponentComponent } from './Patient/SignIn_Page/signin-form-component/signin-form-component.component';
import { MainhomeComponent } from './Home/mainhome/mainhome.component';
import { HomeNavbarComponent } from './Home/home-navbar/home-navbar.component';
import { MainHomeContentComponent } from './Home/main-home-content/main-home-content.component';
import { ServiceHomeComponent } from './Service/service-home/service-home.component';
import { ServiceNavbarComponent } from './Service/service-navbar/service-navbar.component';
import { ServiceContentComponent } from './Service/service-content/service-content.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

import { LoginLogoutComponent } from './services/authservices/login-logout/login-logout.component';

import { AuthModule } from '@auth0/auth0-angular';
``;
import { NursehomeComponent } from './services/nurse/nursehome/nursehome.component';
import { AdminhomeComponent } from './services/admin/adminhome/adminhome.component';

import { PatientProfileNavbarComponent } from './Patient/Patient_Profile/patient-profile-navbar/patient-profile-navbar.component';
import { PatientProfileHomeComponent } from './Patient/Patient_Profile/patient-profile-home/patient-profile-home.component';
import { PatientProfileContentComponent } from './Patient/Patient_Profile/patient-profile-content/patient-profile-content.component';
import { NurseNavComponent } from './services/nurse/nurse-nav/nurse-nav.component';
import { NurseHomecontentComponent } from './services/nurse/nurse-homecontent/nurse-homecontent.component';
import { NurseProfilePageComponent } from './services/nurse/nurse_profile/nurse-profile-page/nurse-profile-page.component';
import { NurseProfileNavbarComponent } from './services/nurse/nurse_profile/nurse-profile-navbar/nurse-profile-navbar.component';
import { NurseProfileContentComponent } from './services/nurse/nurse_profile/nurse-profile-content/nurse-profile-content.component';
import { DoctorProfileComponent } from './services/doctor/doctor-profile/doctor-profile.component';

import { DoctorhomeComponent } from './services/doctor/doctorhome/doctorhome.component';
import { DoctorNavComponent } from './services/doctor/doctor-nav/doctor-nav.component';
import { AdminprofileComponent } from './services/admin/adminprofile/adminprofile.component';
import { AdminnavComponent } from './services/admin/adminnav/adminnav.component';
import { DoctorTodayappointmentComponent } from './services/doctor/doctor-todayappointment/doctor-todayappointment.component';
import { PaginationTdComponent } from './services/doctor/pagination-td/pagination-td.component';
import { PatientBookAppointmentComponent } from './Patient/Book_Appointment/patient-book-appointment/patient-book-appointment.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PatAppointmentNavComponent } from './Patient/Book_Appointment/pat-appointment-nav/pat-appointment-nav.component';
import { PatAppointmentContentComponent } from './Patient/Book_Appointment/pat-appointment-content/pat-appointment-content.component';
import { PatientEditDialogboxComponent } from './Patient/Patient_Profile/patient-edit-dialogbox/patient-edit-dialogbox.component';
import { NurseAppointmentPageComponent } from './services/nurse/nurse_appointment/nurse-appointment-page/nurse-appointment-page.component';
import { NurseAppointmentNavbarComponent } from './services/nurse/nurse_appointment/nurse-appointment-navbar/nurse-appointment-navbar.component';
import { NurseAppointmentContentComponent } from './services/nurse/nurse_appointment/nurse-appointment-content/nurse-appointment-content.component';
import { NurseVitalContentComponent } from './services/nurse/nurse-vital-content/nurse-vital-content.component';
import { MatTableModule } from '@angular/material/table';
import { AdminScheduleComponent } from './services/admin/admin-schedule/admin-schedule.component';
import { NewAvailabilityComponent } from './services/admin/new-availability/new-availability.component';
import { PatReasonDialogComponent } from './Patient/Book_Appointment/pat-reason-dialog/pat-reason-dialog.component';
import { DashboardComponent } from './services/doctor/dashboard/dashboard.component';
import { AcceptedappointmentComponent } from './services/doctor/acceptedappointment/acceptedappointment.component';
import { PatMedHistoryComponent } from './Patient/Medical_History/pat-med-history/pat-med-history.component';
import { PatMedHistoryNavComponent } from './Patient/Medical_History/pat-med-history-nav/pat-med-history-nav.component';
import { PatMedHistoryContentComponent } from './Patient/Medical_History/pat-med-history-content/pat-med-history-content.component';
import { PatMedHistoryDialogComponent } from './Patient/Medical_History/pat-med-history-dialog/pat-med-history-dialog.component';
import { PatMedHistoryPrescriptionDialogComponent } from './Patient/Medical_History/pat-med-history-prescription-dialog/pat-med-history-prescription-dialog.component';
import { PatAppointmentHistoryComponent } from './Patient/Appointment_history/pat-appointment-history/pat-appointment-history.component';
import { PatAppointmentHistoryNavComponent } from './Patient/Appointment_history/pat-appointment-history-nav/pat-appointment-history-nav.component';
import { PatAppointmentHistoryContentComponent } from './Patient/Appointment_history/pat-appointment-history-content/pat-appointment-history-content.component';
import { PatAppointmentHistoryTableComponent } from './Patient/Appointment_history/pat-appointment-history-table/pat-appointment-history-table.component';
import { ForbiddenComponent } from './common/forbidden/forbidden.component';
import { DocViewMedicalHistoryComponent } from './services/doctor/MedicalHistory/doc-view-medical-history/doc-view-medical-history.component';
import { DocUpdateMedInfoContentComponent } from './services/doctor/UpdateMedInfo/doc-update-med-info-content/doc-update-med-info-content.component';
import { DocUpdateMedInfoTableComponent } from './services/doctor/UpdateMedInfo/doc-update-med-info-table/doc-update-med-info-table.component';
import { DocMedInfoEditDialogComponent } from './services/doctor/UpdateMedInfo/doc-med-info-edit-dialog/doc-med-info-edit-dialog.component';
import { DocMedInfoViewPrescriptionDialogComponent } from './services/doctor/UpdateMedInfo/doc-med-info-view-prescription-dialog/doc-med-info-view-prescription-dialog.component';
import { DocMedInfoAddPrescriptionDialogComponent } from './services/doctor/UpdateMedInfo/doc-med-info-add-prescription-dialog/doc-med-info-add-prescription-dialog.component';
import { DocUpdateMedInfoComponent } from './services/doctor/UpdateMedInfo/doc-update-med-info/doc-update-med-info.component';
import { DocAddTestDialogComponent } from './services/doctor/UpdateMedInfo/doc-add-test-dialog/doc-add-test-dialog.component';
import { DocPatMedHistoryContentComponent } from './services/doctor/MedicalHistory/doc-pat-med-history-content/doc-pat-med-history-content.component';
import { DocPatMedHistoryPrescriptionDialogComponent } from './services/doctor/MedicalHistory/doc-pat-med-history-prescription-dialog/doc-pat-med-history-prescription-dialog.component';
import { DocPatMedHistoryTestDialogComponent } from './services/doctor/MedicalHistory/doc-pat-med-history-test-dialog/doc-pat-med-history-test-dialog.component';
import { AdminPatientInfoComponent } from './services/admin/admin-patient-info/admin-patient-info.component';
import { AdminAddDoctorComponent } from './services/admin/admin-add-doctor/admin-add-doctor.component';
import { NursePatHomeComponent } from './services/nurse/nurse_pat_medical_info/nurse-pat-home/nurse-pat-home.component';
import { NursePatNavbarComponent } from './services/nurse/nurse_pat_medical_info/nurse-pat-navbar/nurse-pat-navbar.component';
import { NursePatContentComponent } from './services/nurse/nurse_pat_medical_info/nurse-pat-content/nurse-pat-content.component';
import { NursePatHistoryDialogComponent } from './services/nurse/nurse_pat_medical_info/nurse-pat-history-dialog/nurse-pat-history-dialog.component';
import { NursePatHistoryPrescriptionComponent } from './services/nurse/nurse_pat_medical_info/nurse-pat-history-prescription/nurse-pat-history-prescription.component';
import { PatShowVitalComponent } from './Patient/Medical_History/pat-show-vital/pat-show-vital.component';
import { DocShowVitalComponent } from './services/doctor/MedicalHistory/doc-show-vital/doc-show-vital.component';
import { NurseShowVitalComponent } from './services/nurse/nurse_pat_medical_info/nurse-show-vital/nurse-show-vital.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DobToAgePipe } from './Patient/dob-to-age.pipe';
import { DigitToValuePipe } from './Patient/Appointment_history/digit-to-value.pipe';
import { AdminAvailableDoctorComponent } from './services/admin/admin-available-doctor/admin-available-doctor.component';
import { AdminAddScheduleDialogComponent } from './services/admin/admin-add-schedule-dialog/admin-add-schedule-dialog.component';
import { AdminAvailDeleteDialogboxComponent } from './services/admin/admin-avail-delete-dialogbox/admin-avail-delete-dialogbox.component';
import { DocUpdateAvailabilityComponent } from './services/doctor/doc-update-availability/doc-update-availability.component';
import { DateformatterPipe } from './Patient/dateformatter.pipe';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    LoginFormComponentComponent,
    LoginNavbarComponentComponent,
    HomeContentComponent,
    SigninComponentComponent,
    SigninNavbarComponentComponent,
    SigninFormComponentComponent,
    MainhomeComponent,
    LoginLogoutComponent,
    NursehomeComponent,
    AdminhomeComponent,
    SigninComponentComponent,
    SigninNavbarComponentComponent,
    SigninFormComponentComponent,
    MainhomeComponent,
    HomeNavbarComponent,
    MainHomeContentComponent,
    ServiceHomeComponent,
    ServiceNavbarComponent,
    ServiceContentComponent,
    DoctorProfileComponent,
    DoctorhomeComponent,
    DoctorNavComponent,

    PatientProfileNavbarComponent,
    PatientProfileHomeComponent,
    PatientProfileContentComponent,
    NurseNavComponent,
    NurseHomecontentComponent,
    NurseProfilePageComponent,
    NurseProfileNavbarComponent,
    NurseProfileContentComponent,
    AdminprofileComponent,
    AdminnavComponent,
    DoctorTodayappointmentComponent,
    PaginationTdComponent,
    PatientBookAppointmentComponent,
    PatAppointmentNavComponent,
    PatAppointmentContentComponent,
    PatientEditDialogboxComponent,
    NurseAppointmentPageComponent,
    NurseAppointmentNavbarComponent,
    NurseAppointmentContentComponent,
    NurseVitalContentComponent,
    AdminScheduleComponent,
    NewAvailabilityComponent,
    PatReasonDialogComponent,
    DashboardComponent,
    AcceptedappointmentComponent,
    PatMedHistoryComponent,
    PatMedHistoryNavComponent,
    PatMedHistoryContentComponent,
    PatMedHistoryDialogComponent,
    PatMedHistoryPrescriptionDialogComponent,
    PatAppointmentHistoryComponent,
    PatAppointmentHistoryNavComponent,
    PatAppointmentHistoryContentComponent,
    PatAppointmentHistoryTableComponent,
    ForbiddenComponent,
    DocViewMedicalHistoryComponent,
    DocUpdateMedInfoComponent,
    DocUpdateMedInfoContentComponent,
    DocUpdateMedInfoTableComponent,
    DocMedInfoEditDialogComponent,
    DocMedInfoViewPrescriptionDialogComponent,
    DocMedInfoAddPrescriptionDialogComponent,
    DocAddTestDialogComponent,
    DocPatMedHistoryContentComponent,
    DocPatMedHistoryPrescriptionDialogComponent,
    DocPatMedHistoryTestDialogComponent,
    AdminPatientInfoComponent,
    AdminAddDoctorComponent,
    NursePatHomeComponent,
    NursePatNavbarComponent,
    NursePatContentComponent,
    NursePatHistoryDialogComponent,
    NursePatHistoryPrescriptionComponent,
    PatShowVitalComponent,
    DocShowVitalComponent,
    NurseShowVitalComponent,
    DobToAgePipe,
    DigitToValuePipe,
    AdminAvailableDoctorComponent,
    AdminAddScheduleDialogComponent,
    AdminAvailDeleteDialogboxComponent,
    DocUpdateAvailabilityComponent,
    DateformatterPipe,
  ],

  imports: [
    HttpClientModule,
    MomentDateModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,

    AuthModule.forRoot({
      domain: 'dev-4o16n0ly4u0mxvll.us.auth0.com',
      clientId: '8moNAcVOTwfw9svEb3vGDPD89Me1QyDG',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
