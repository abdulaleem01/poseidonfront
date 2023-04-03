import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';
import { Observable } from 'rxjs';
import { availability } from './Book_Appointment/pat-appointment-content/pat-appointment-content.component';

export interface patientObj {
  email: string;
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
  contactNumber: string;
  password: string;
  gender: string;
  address: string;
}
export interface getPatientObj {
  Id: number;
  email: string;
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
  contactNumber: string;
  password: string;
  gender: string;
  address: string;
}

export interface items {
  id: number;
  reason: string;
  date: string;
  acceptance: number;
  //physicianEmail:string;
  submissionDate: string;
}

export interface loginDetails {
  Email: string;
  password: string;
}

export interface appointment {
  reason: string;
  date: string;
  acceptance: number;
  patientId: number;
  physicianEmail: string;
  submissionDate: string;
}

export interface reason {
  reason: string;
}

export interface test {
  id: number;
  visitDetailsId: number;
  testName: string;
  result: string;
  notes: string;
}

export interface vitals {
  [x: string]: any;
  bp: string;
  temp: string;
  ht: string;
  wt: string;
  spo2: string;
  allergies: string;
}

export interface visitDetail {
  id: number;
  patientId: number;
  height: number;
  weight: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  bodyTemperature: number;
  respirationRate: number;
  bloodGroup: string;
  nurseEmail: string;
  physicianEmail: string;
  appointmentId: number;
  keyNotes: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServicePatientService {
  constructor(private http: HttpClient) {}

  // VARIABLE DECLARATIONS

  currentUser: any;
  patientData: patientObj;
  email: string;
  password: string;
  testList: any = [];
  tList: any = [];
  newVitals: any;
  newAllergy: any;

  patientDet: patientObj = {
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    dob: '',
    contactNumber: '',
    password: '',
    gender: '',
    address: '',
  };
  updatedPatient: getPatientObj = {
    Id: 0,
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    dob: '',
    contactNumber: '',
    password: '',
    gender: '',
    address: '',
  };

  currentAppointment: appointment = {
    reason: '',
    date: '',
    acceptance: 0,
    patientId: 0,
    physicianEmail: '',
    submissionDate: '',
  };

  currentVitals: vitals = {
    bp: '',
    temp: '',
    ht: '',
    wt: '',
    spo2: '',
    allergies: '',
  };

  // FOR AUTO REFRESH OF VIEW AFTER DB UPDATE
  private _refreshRequired = new Subject<void>();

  getRefreshRequired() {
    return this._refreshRequired;
  }

  //RootURLS
  rootURL = 'https://localhost:7102/api';
  appointmentRootUrl = 'https://localhost:7267/api/Appointment/';
  physicianAvaRootUrl = 'https://localhost:7140/api/PhysicianAvailability/';
  AllergyRootUrl = 'https://localhost:7182/api';
  EmailServiceRoot = 'https://localhost:7292';

  //NEW PATIENT REGISTRATION
  addPatient(patient: any) {
    this.patientDet.firstName = patient.firstName;
    this.patientDet.lastName = patient.lastName;
    this.patientDet.title = patient.title;
    this.patientDet.contactNumber = patient.contactNumber;
    this.patientDet.address = patient.address;
    this.patientDet.password = patient.password;
    this.patientDet.dob = patient.dob;
    this.patientDet.gender = patient.gender;
    this.patientDet.email = patient.email;
    localStorage.setItem('currentUserEmail', patient.email);
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(this.patientDet);
    console.log(body);
    return this.http
      .post(this.rootURL + '/Patient/Add_Patient', body, { headers: headers })
      .pipe(
        tap(() => {
          this._refreshRequired.next();
        })
      );
  }

  //DETAILS FOR PROFILE PAGE AFTER LOGIN
  getDetailsForProfile(id: number) {
    return this.http.get<patientObj>(this.rootURL + '/Patient/Get_by_ID/' + id);
  }

  //UPDATE USER DETAILS
  updatePersonalDetails(id: number, updatedDetails: any) {
    var headers;
    var body;
    console.log('update call');
    headers = { 'content-type': 'application/json' };
    body = JSON.stringify(updatedDetails);
    console.log(body);

    console.log(body);
    return this.http
      .put(this.rootURL + '/Patient/Update_Patient/' + id, body, {
        headers: headers,
      })
      .pipe(
        tap(() => {
          this._refreshRequired.next();
        })
      );
  }
  //LOGIN
  tryLogin(details: any) {
    this.email = details.Email;
    this.password = details.password;

    return this.http.get<number>(
      this.rootURL + '/Patient/patientLogin/' + this.email + '/' + this.password
    );
  }

  //APPOINTMENT HISTORY
  public getAppointmentHistory(id: number): Observable<any> {
    return this.http.get(this.appointmentRootUrl + 'GetbyPatientID/' + id);
  }

  //AVAILABLE DOCTORS LIST
  public getAllAvailableDoctors() {
    return this.http.get(this.physicianAvaRootUrl + 'Get_All_Physicians');
  }

  public setAppointments(appointmentData: appointment) {
    this.currentAppointment.submissionDate = appointmentData.submissionDate;
    this.currentAppointment.date = appointmentData.date;
    this.currentAppointment.patientId = appointmentData.patientId;
    this.currentAppointment.physicianEmail = appointmentData.physicianEmail;
    this.currentAppointment.acceptance = appointmentData.acceptance;
  }

  public bookAppointment(reason: any) {
    this.currentAppointment.reason = reason.reason;
    var headers = { 'content-type': 'application/json' };
    var body = JSON.stringify(this.currentAppointment);
    return this.http.post(this.appointmentRootUrl + 'Add_appointment', body, {
      headers: headers,
    });
  }

  public getMedicalHistory() {
    var currentUserId = JSON.parse(localStorage.getItem('LoggedInUserId')!);
    return this.http.get(
      this.rootURL + '/VisitDetails/GetVisitDetailsById/' + currentUserId
    );
  }

  public getTestForAVisit(id: number) {
    return this.http.get(this.rootURL + '/Test/GetTestListbyid/' + id);
  }

  public getPrescription(id: number) {
    return this.http.get(
      this.rootURL + '/Prescription/GetPrescriptionById/' + id
    );
  }

  public getVitals(id: number) {
    return this.http.get<visitDetail>(
      this.rootURL + '/VisitDetails/GetParticularVisitDetailsById/' + id
    );
  }
  public getAllergies(id: number) {
    return this.http.get(this.AllergyRootUrl + '/Allergy/Fetch/' + id);
  }

  public sendBookedEmail() {
    var headers = { 'content-type': 'application/json' };
    var body = '';
    var toMail = localStorage.getItem('currentUserEmail');
    return this.http.post(
      this.EmailServiceRoot + '/poseidonhc/sendEmail/' + toMail + '/' + 0,
      body,
      { headers: headers }
    );
  }

  public isExistEmail(email: string) {
    return this.http.get(this.rootURL + '/Patient/PatientExist/' + email);
  }
  public isExistPhone(phone: string) {
    return this.http.get(this.rootURL + '/Patient/phoneNo/isExist/' + phone);
  }
}
