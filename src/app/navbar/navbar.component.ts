import { Component, OnInit , DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,DoCheck  {

  constructor(private route :Router) { }
  ngDoCheck(): void {
  }

  ngOnInit(): void {
  }
}
