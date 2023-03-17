import { Component, OnInit ,DoCheck } from '@angular/core';
import * as AOS from 'aos';
import { window } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'geekyAir';
   
  ngOnInit(): void {
    AOS.init(
    );
 
  }
  scrollToTop() {
    let x = document.getElementById("mynav")
    x?.scrollIntoView({behavior : "smooth"})
  }
 
  
    
  
}

