import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  display:string="";

  result:number=0;
  num1:number=3;
  num2:number=4;

  Result:string="";

  myname:string="Hefshine Software";

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    console.log("On Click Event Occur!!!!!!!");
  }

  onclick1(event1){
    console.log(event1);

    console.log(event1.target.value);
  }

  oninputclick(event){
    console.log(event.target.value);
  }
  
  oninputchange(event){
    console.log(event.target.value);
  }

  onvalidate(event){
    if(event.target.value=="Sumit"){
      this.display="Valid User"
    }else
    {
      this.display="Invalid user"
    }
  }

  onkeyup(){
    console.log("Keyup Event occur!!!");
  }

  onkeydown(){
    console.log("Key Down Event occur!!!");
  }
  disptext(value){
    this.Result=value;
  }

  onclick2(domelement){
    domelement.style.background='red';
  }
}
