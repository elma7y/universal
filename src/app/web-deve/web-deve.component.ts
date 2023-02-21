import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-deve',
  templateUrl: './web-deve.component.html',
  styleUrls: ['./web-deve.component.scss']
})
export class WebDeveComponent implements OnInit {

  constructor() { }
  private _isExpanded = false;
  
  public get isExpanded() {
    return this._isExpanded;
  }

  public set isExpanded(value: boolean) {
     this._isExpanded = value;
  }

  ngOnInit(): void {
  }
  

}
