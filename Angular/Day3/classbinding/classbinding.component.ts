import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  myclass:string="success";

  iserror:boolean=true;
  myclass1:string="success";
  myclass2:string="danger";
  istrue:boolean=true;

  myobj={
    "success":this.iserror,
    "danger" :!this.iserror,
    "textspecial":this.istrue
  };

  rating:number=4;

  constructor() { }

  ngOnInit() {
  }

}
