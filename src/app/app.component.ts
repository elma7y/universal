import { Component, OnInit ,DoCheck, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<button id="myBtn" (click)="topFunction()" *ngIf="showButton">Back to top</button> `
})
export class AppComponent implements OnInit  {

  constructor(private route:Router){}

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

  scrollToTop() {
    let x = document.getElementById("mynav")
    x?.scrollIntoView({behavior : "smooth"})
  }

  showElement = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = (window as unknown as Window).pageYOffset || (document.documentElement as HTMLElement).scrollTop || (document.body as HTMLElement).scrollTop || 0;
    this.showElement = scrollPosition > 100;
  }


}

