import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.css']
})
export class EmpolyeeComponent  {

  name:string="Sumit Raokhande";
   no:number=5;
   imgname:string='../../assets/Desert.jpg';
  name2:string="Kiran Chavan";
   getname(){
     return this.name2;
   }
   

  constructor() { }

 

}
