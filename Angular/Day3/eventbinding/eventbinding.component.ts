import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  name:string="";
  inputcolor:string="";
  count:number=0;
  divcolor:string="white";

  divcolor1:string='white';

  Name:string="";

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    console.log("Click Event Occur");
    this.name="Sumit Raokahnde";
  }
  
  eventinfo(event){
    console.log(event);
  }

  onkeyup(){
    console.log("Key up Event Occur!!!!!!!");
  }
  onkeydown(){
    console.log("Key down Event Occur!!!!!!!");
  }

  onchange(){
    console.log("Change Event Occur!!!!!");
    this.inputcolor='red';
  }

  onDisplay(){
    if(this.count==0){
    console.log("Event Occur");
    this.count=this.count+1;
    }
  }

  onRed(){
    this.divcolor='red';
  }
  onBlue(){
    this.divcolor='blue';
  }
  onGreen(){
    this.divcolor='green';
  }

  onPink(){
    this.divcolor='pink';
  }

  onColorchange(colorcode){
    this.divcolor1=colorcode;
  }

  myeventinfo(event){
    console.log(event);
   this.Name=event.target.value;
  }


}
