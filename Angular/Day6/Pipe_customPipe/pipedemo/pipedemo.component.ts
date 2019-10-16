import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  strdetail:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non dolor odio possimus modi cupiditate voluptatibus repellat, fugiat totam recusandae dolorem. Dolorem nihil assumenda modi excepturi rem harum veritatis quos?";

  strdetails1:string="Hello welcome to Angular Course";

  person={
    firstnmae:"Sumit",
    lastname:"Raokhande"
  };
num1:number=5.67895;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
