import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent implements OnInit {

@Output() childtoparent=new EventEmitter();
@Output() childtoparentOBJ=new EventEmitter()

@Output() ChildToParentultiTypeArray=new EventEmitter();


Message:string="Data from Child to Parent";

childobj={
  Empname:"Shashank",
  Salaray:50000,
  id:1
}

childMultiOBJ=[
  {
    Empname:"Shashank",
    Salaray:50000,
    id:1
  },
  {
    Empname:"Shivani",
    Salaray:50000,
    id:2
  },
  {
    Empname:"Jyoti",
    Salaray:50000,
    id:3
  }
];

  constructor() { }

  ngOnInit() {
  }

  SendData(){
    // this.childtoparent.emit(this.Message);

    // this.childtoparentOBJ.emit(this.childobj);
    this.ChildToParentultiTypeArray.emit(this.childMultiOBJ);

  }

}
