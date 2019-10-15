import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOutput';

msg:string="Hi Data From Parent Componet!!!!";

myobj={
  name:"Shubham",
  lastname:"Rokade",
  rollno:1
}

myarr=[
  {
    name:"Shubham",
    lastname:"Rokade",
    rollno:1
  },
  {
    name:"Vishal",
    lastname:"labade",
    rollno:2
  },
  {
    name:"Sumit",
    lastname:"Raokhande",
    rollno:3
  }

];

collectdata:string="";
collectdata1={};
collectdata2=[];


}
