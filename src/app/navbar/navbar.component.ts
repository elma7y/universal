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
    const el = document.getElementById("serve")
    console.log(el);
    if(el){
      el.scrollIntoView({behavior:'smooth'})
    }
  }
}
