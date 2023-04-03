import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainhomeComponent } from './Home/mainhome/mainhome.component';
import { ServiceHomeComponent } from './Service/service-home/service-home.component';
import { HomeComponentComponent } from './Patient/Home_Page/home-component/home-component.component';
import { LoginComponentComponent } from './Patient/Login_Page/login-component/login-component.component';
import { SigninComponentComponent } from './Patient/SignIn_Page/signin-component/signin-component.component';

// 
import { AdminhomeComponent } from './services/admin/adminhome/adminhome.component';
import { DoctorhomeComponent } from './services/doctor/doctorhome/doctorhome.component';
import { NursehomeComponent } from './services/nurse/nursehome/nursehome.component';
import { NurseProfilePageComponent } from './services/nurse/nurse_profile/nurse-profile-page/nurse-profile-page.component';
import { NurseAppointmentContentComponent } from './services/nurse/nurse_appointment/nurse-appointment-content/nurse-appointment-content.component';

import { AuthorizationService } from './authorization.service';

import { AuthGuard } from './auth.guard';

import { DoctorProfileComponent } from './services/doctor/doctor-profile/doctor-profile.component';
import { AdminprofileComponent } from './services/admin/adminprofile/adminprofile.component';

import { DoctorTodayappointmentComponent } from './services/doctor/doctor-todayappointment/doctor-todayappointment.component';

import { PatientProfileHomeComponent } from './Patient/Patient_Profile/patient-profile-home/patient-profile-home.component';
import { PatientBookAppointmentComponent } from './Patient/Book_Appointment/patient-book-appointment/patient-book-appointment.component';
import { AdminScheduleComponent } from './services/admin/admin-schedule/admin-schedule.component';
import { DashboardComponent } from './services/doctor/dashboard/dashboard.component';
import { PatMedHistoryComponent } from './Patient/Medical_History/pat-med-history/pat-med-history.component';
import { PatAppointmentHistoryComponent } from './Patient/Appointment_history/pat-appointment-history/pat-appointment-history.component';
import { ForbiddenComponent } from './common/forbidden/forbidden.component';
import { DocUpdateMedInfoComponent } from './services/doctor/UpdateMedInfo/doc-update-med-info/doc-update-med-info.component';
import { DocViewMedicalHistoryComponent } from './services/doctor/MedicalHistory/doc-view-medical-history/doc-view-medical-history.component';
import { AdminPatientInfoComponent } from './services/admin/admin-patient-info/admin-patient-info.component';
import { AdminAddDoctorComponent } from './services/admin/admin-add-doctor/admin-add-doctor.component';
import { NursePatHomeComponent } from './services/nurse/nurse_pat_medical_info/nurse-pat-home/nurse-pat-home.component';
import { AdminAvailableDoctorComponent } from './services/admin/admin-available-doctor/admin-available-doctor.component';

const routes: Routes = [
  { path: '', component: MainhomeComponent },
  { path: 'service_home', component: ServiceHomeComponent },
  { path: 'patient_home', component: HomeComponentComponent },
  { path: 'login_page', component: LoginComponentComponent },
  { path: 'signin_page', component: SigninComponentComponent },
  { path: 'nurse_home', component: NursehomeComponent },
  { path: 'adminprofile', component: AdminhomeComponent },
  { path: 'nurse_profile', component: NursehomeComponent },
  { path: 'adminhome', component: AdminprofileComponent, canActivate: [AuthGuard] },
  { path: 'doctorhome', component: DoctorProfileComponent, canActivate: [AuthGuard] },
  // { path: 'nursehome', component: NurseProfilePageComponent,canActivate:[AuthGuard] },
  //  {path:'dochome',component:DoctorhomeComponent},
  { path: 'doctdapp', component: DoctorTodayappointmentComponent, canActivate: [AuthGuard] },

  { path: 'nursehome', component: NurseProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'dochome', component: DoctorhomeComponent },
  { path: 'patient_profile', component: PatientProfileHomeComponent },
  { path: 'patient_book_app', component: PatientBookAppointmentComponent },
  { path: 'nurse_appointment', component: NurseAppointmentContentComponent },
  { path: 'admin_schedule', component: AdminScheduleComponent },
  { path: 'docacceptedappointments', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'patient_medHistory', component: PatMedHistoryComponent },
  { path: 'patient_appointmentHistory', component: PatAppointmentHistoryComponent },
  { path: 'forbiddenroute', component: ForbiddenComponent },
  { path: 'update_medInfo', component: DocUpdateMedInfoComponent },
  { path: 'doc/patient_medicalHistory', component: DocViewMedicalHistoryComponent },
  { path: 'admin_patient_info', component: AdminPatientInfoComponent },
  { path: 'admin_add_doc', component: AdminAddDoctorComponent },
  { path: 'nurse-pat-info', component: NursePatHomeComponent },
  { path: 'admin-available-doc', component: AdminAvailableDoctorComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(public myauth: AuthorizationService) { }
}
