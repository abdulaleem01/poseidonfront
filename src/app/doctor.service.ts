import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointments } from './appointments';
import { TestDetail } from './services/doctor/UpdateMedInfo/doc-med-info-edit-dialog/doc-med-info-edit-dialog.component';
import { TestDetail1 } from './services/doctor/UpdateMedInfo/doc-add-test-dialog/doc-add-test-dialog.component';
import { Prescription } from './services/doctor/UpdateMedInfo/doc-med-info-add-prescription-dialog/doc-med-info-add-prescription-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  Doctor_name:any;
  appointment_num:number;
  TestId:number;
  VisitId:number;
  pageRefresh:boolean = false;
  PatientId:number;
  EmailPatientId:number;
  constructor(private http:HttpClient) { }

  urlAppointment = "https://localhost:7292/poseidonhc";



  
  // This service is to get all the patient appointment details based on acceptance number and doctor email id.
  public GetAppointmentsByAceptanceEmail(id:Number,email:String):Observable<any>{
    const url = `${this.urlAppointment}/AcceptanceAndEmail/${id}/${email}`;
    return this.http.get<any>(url);
  }

  // https://localhost:7292/poseidonhc/Get_by_ID/11
  // This service is to get the patient detila based on their patient id.
  public GetPatientDetailsByID(id:Number):Observable<any>{
    const url = `${this.urlAppointment}/Get_by_ID/${id}`
    return this.http.get<any>(url);
  }

  // https://localhost:7267/api/Appointment/updatebyAppointMentNo/4/0
  // https://localhost:7292/poseidonhc/updatebyAppointMentNo/4/1

  public PutAcceptancebyId(id:Number,Acceptance:Number):Observable<any>{
    const url = `${this.urlAppointment}/updatebyAppointMentNo/${id}/${Acceptance}`;
    return this.http.put<any>(url,null);
    
  }

  // https://localhost:7292/poseidonhc/GetByDateAcceptanceNoDoctorEmail?AcceptanceId=3&Date=23%2F03%2F2022&DoctorEmail=test%40gmail.com
  public GetByAcceptanceDoctorEmailDate(AcceptanceNo:number,Date:string,DoctorEmail:string){
    const ogDate = Date.replace("/" ,"%2F")
    const ogDocMail = DoctorEmail.replace(/@/g,"%40")
    const url = `${this.urlAppointment}/GetByDateAcceptanceNoDoctorEmail?AcceptanceId=${AcceptanceNo}&Date=${ogDate}&DoctorEmail=${ogDocMail}`;
    return this.http.get<any>(url);
  }

  // https://localhost:7292/poseidonhc/GetVisitDetailsByAcceptanceId/43
  public GetVisitDetailsByAcceptanceId(AcceptanceID:number){
    const url = `${this.urlAppointment}/GetVisitDetailsByAcceptanceId/${AcceptanceID}`;
    return this.http.get<any>(url);
  }

  // https://localhost:7292/poseidonhc/allery/84

  public GetAllergyDetailsByVisitID(VisitId:number){
    const url = `${this.urlAppointment}/allery/${VisitId}`;
    return this.http.get<any>(url);
  }

  // https://localhost:7292/poseidonhc/GetTestListbyid/84
  public GetTestResultsByVisitId(VisitId:number){
    const url = `${this.urlAppointment}/GetTestListbyid/${VisitId}`
    return this.http.get<any>(url);
  }

  // public putContacts(contact:contact,id:any):Observable<any>{
  //   const url = `https://localhost:7118/UpdateContacts/${id}`
  //   return this.http.put<any>(url,contact)
  // }
  // https://localhost:7102/api/Test/UpdateTest/14

  public PutUpdateTest(TestID:number,TestDetail:TestDetail){

    const url = `${this.urlAppointment}/UpdateTest/${TestID}`
    return this.http.put<any>(url,TestDetail);


  }

  public DeleteTest(testID:number){
    const url = `${this.urlAppointment}/DeleteTest/${testID}`
    return this.http.delete<any>(url);
  }

  // /poseidonhc/AddTest
  public AddTest(TestDetails:TestDetail1){
    const url = `${this.urlAppointment}/AddTest`
    return this.http.post<any>(url,TestDetails);
  }

  // /poseidonhc/GetPrescriptionById/{id}

  public ViewPrescription(VisitID:number){
    const url = `${this.urlAppointment}/GetPrescriptionById/${VisitID}`;
    return this.http.get<any>(url);
  }
  // /poseidonhc/AddPrescription

  public AddPriscription(Pres:Prescription){
    const url = `${this.urlAppointment}/AddPrescription`
    return this.http.post<any>(url,Pres);
  }

  // /poseidonhc/Get_by_ID/{id}

  public GetPatientById(patId:number){
    const url = `${this.urlAppointment}/Get_by_ID/${patId}`;
    return this.http.get<any>(url);
  }

 
  // poseidonhc/GetVisitDetailsById/{id}

  public GetVisitByPatientId(patId:number){
    const url = `${this.urlAppointment}/GetVisitDetailsById/${patId}`;
    return this.http.get<any>(url);

  }

  // public GetVisitDetailsById(){
  //   const url = `${this.urlAppointment}`;
  //   return
  // }
  
  // /poseidonhc/sendEmail/{email}/{status}

  public EmailSender(Email:string,Status:number){
    const url = `${this.urlAppointment}/sendEmail/${Email}/${Status}`
    return this.http.post<any>(url,null);
  }



  Patient_Details: any[] = [
    {position:1,name:'Abdul',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:2,name:'Madhu',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:3,name:'MadhuVanthi',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:4,name:'Ajith',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:5,name:'Yugaraj',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:6,name:'Maruti',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:7,name:'Rizwan',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:8,name:'Jyotish',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:9,name:'Mahesh',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:10,name:'Mani',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:11,name:'Monica',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:12,name:'Ajay',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},
    {position:13,name:'Raghu',age:'17-Mar-2023',gender:'Arthritis is a common condition that causes pain and inflammation in a joint.',diagnosis:'Flu (influenza) is a common infectious viral illness spread by coughs and sneezes. It can be very unpleasant, but you ll usually begin to feel better within about a week.'},

    // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];
}
