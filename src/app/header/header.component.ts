import { Component, OnInit  } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../services/contact-us.service';
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
   contact:FormGroup = new FormGroup({
     firstName:new FormControl( '' , [Validators.required ,Validators.minLength(3)]),
     lastName:new FormControl( '',[Validators.required ,Validators.minLength(3)]),
     email:new FormControl('' ,  [Validators.email ,Validators.required]),
     phone:new FormControl('', [Validators.required]),
     textArea:new FormControl('',[Validators.required])


   })
   
  constructor(private contactus:ContactUsService) { }

  ngOnInit(): void {
    new Typewriter('#typewriter', {
      strings: ['Hello', 'World'],
      autoStart: true,
    });
  }

   

  submitcontactform(){
    this.contactus.firstName = this.contact.controls['firstName'].value
    this.contactus.lastName = this.contact.controls['lastName'].value
    this.contactus.email = this.contact.controls['email'].value
    this.contactus.phone = this.contact.controls['phone'].value
    this.contactus.textArea = this.contact.controls['textArea'].value
    this.contactus.contact().subscribe(res=>{
      console.log(res)
    })
  }




}