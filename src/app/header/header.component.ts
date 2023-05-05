import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

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
    if(this.route.url !== "/"){
      this.route.navigate(['/'])
      setTimeout(() => {
        const el = document.getElementById("serve")
        if(el){
          el.scrollIntoView({behavior:'smooth'})
        }
      }, 100);
    }
  }
  img1="../../assets/Images/home.png"


}
