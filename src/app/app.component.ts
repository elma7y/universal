import { Component, OnInit , HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { Title , Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<button id="myBtn" (click)="topFunction()" *ngIf="showButton">Back to top</button> `
})
export class AppComponent implements OnInit  {

  constructor(private route:Router, private titleService:Title , private metaService:Meta){
    titleService.setTitle("Integrate your favorite apps with Zapier Automate your tasks by connecting Airtable to Google Sheets Simplify your business processes by connecting Airtable and Google Sheets connect Airtable to Google Sheets Connect your social media accounts with Zapier Take control of your social media presence with Zapier Automate your data transfer between Airtable and Google Sheets Simplify your data management process by connecting Airtable and Google Sheets Integrate Airtable with Google Sheets using Zapier Streamline your workflows and automate your tasks with Zapier Take control of your apps and streamline your business processes with Zapier")
    metaService.addTag({name : "description", content: "GeekyAir is a top-rated No-Code/Low-Code, Web Development, UI/UX, and Social Media Management company located in Alexandria, Egypt. Our comprehensive range of services includes Data Base Architecture, No-Code Automations, Scripting, Web Development, UI/UX Graphic Designing, Virtual Assistance, and Data Entry"})
  }

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

