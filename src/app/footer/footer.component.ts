import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollintView(){
    const el = document.getElementById("serve")
    if(el){
      el.scrollIntoView({behavior:'smooth'})
    }
  }
}
