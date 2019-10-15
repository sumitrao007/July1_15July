import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdirective',
  templateUrl: './ifdirective.component.html',
  styleUrls: ['./ifdirective.component.css']
})
export class IfdirectiveComponent implements OnInit {

  rating:number=2;

  name:string="";
  ishidden:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  Onclick(){
    this.ishidden=false;
  }

}
