import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
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
      }, 1000);
    }
  }
}
