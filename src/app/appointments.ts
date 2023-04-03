export class Appointments{
    id :Number;
    reason:string;
    bookedForDate:string;
    acceptance:Number;
    patientId:Number;
    physicianEmail:string;
    bookedOnDate:string;
    patientName:String;
    
constructor(Id:Number,Reason:string,BookedFDate:string,Acceptance:Number,PatientId:Number,PhysicianEmail:string,BookedODate:string,PAtientName:String)
{
  this.id = Id;
  this.reason = Reason;
  this.bookedForDate = BookedFDate;
  this.acceptance = Acceptance;
  this.patientId = PatientId;
  this.physicianEmail = PhysicianEmail;
  this.bookedOnDate = BookedODate;
  this.patientName = PAtientName;

}
} 