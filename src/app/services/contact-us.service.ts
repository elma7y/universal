import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  firstName:any
  lastName:any
  email:any
  phone:any
  textArea:any
  ApiKey:string 
  solutionID:string
  constructor(private http:HttpClient) {
    this.ApiKey = "7e539400906c838afdb21e95b424b4f1b7779c2e"
    this.solutionID = "6400948ad6c922626dfe8087"
  }
  contact(){
    const  headers = new HttpHeaders({
      'Authorization' :`Token ${this.ApiKey}`,
      "ACCOUNT-ID" :"snt0n45k",
      'Content-Type': 'application/json',
    }) 
    let body = {
      "First Name" : this.firstName,
      "Last Name" : this.lastName,
      "Email" : this.email,
      "Phone" : this.phone,
      "Project Info" : this.textArea
    }
    
    return this.http.post<any>(`https://app.smartsuite.com/api/v1/applications/6400948ad6c922626dfe8087/records/`,body,{headers})
    }
}
