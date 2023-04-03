import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nurse-appointment-page',
  templateUrl: './nurse-appointment-page.component.html',
  styleUrls: ['./nurse-appointment-page.component.css']
})
export class NurseAppointmentPageComponent{
//constructor(private http:HttpClient){ }

ngOnInit(){
  // let resp=this.http.get("https://localhost:7267/api/Appointment");
  // resp.subscribe((data)=>console.log(data));

  //this.http.get('https://localhost:7267/api/Appointment').subscribe((response)=>{alert(JSON.stringify(response))});
}

}
