import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchdirective',
  templateUrl: './ngswitchdirective.component.html',
  styleUrls: ['./ngswitchdirective.component.css']
})
export class NgswitchdirectiveComponent implements OnInit {


  color:string='';
  backcolor:string='white';

  constructor() { }

  ngOnInit() {
  }

  onClickcolor(input){
    this.color=input.value;
    this.backcolor=this.color;
  }

}
