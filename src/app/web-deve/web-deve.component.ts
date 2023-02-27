import { Component, OnInit } from '@angular/core';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-web-deve',
  templateUrl: './web-deve.component.html',
  styleUrls: ['./web-deve.component.scss']
})
export class WebDeveComponent implements OnInit {
  activeState: boolean[] = [true, false, false];

  constructor() { }
  ngOnInit(): void {
  
}
toggle(index: number) {
  this.activeState[index] = !this.activeState[index];
}

}