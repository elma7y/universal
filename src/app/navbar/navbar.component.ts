import { Component, OnInit , DoCheck, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,DoCheck,AfterViewInit  {
  @ViewChild('service')
  MyProps!: ElementRef;
  constructor(private route :Router) { }
  ngAfterViewInit(): void {
  }
  ngDoCheck(): void {
  }

  ngOnInit(): void {
  }
  scroll(el:any){
    el.scrollIntoView({behavior:'smooth'})
  }
  closeToggle(){
    let toggle = document.getElementById("close")
    toggle?.click()
  }
  scrollintView(){
    this.service()
    const el = document.getElementById("serve")
    if(el){
      el.scrollIntoView({behavior:'smooth'})
    }
  }
  service(){
    if(this.route.url == "/privacy"){
      this.route.navigate(['/'])
      setTimeout(() => {
        const el = document.getElementById("serve")
        if(el){
          el.scrollIntoView({behavior:'smooth'})
        }
      }, 100);
    }
  }
}
