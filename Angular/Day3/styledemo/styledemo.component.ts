import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css']
})
export class StyledemoComponent implements OnInit {

  colortext:string='red';
  rating:number=2;

  colortext1:string='red';
  colortext2:string='green';

  myobj={
    color:'red',
    fontStyle:'italic',
    fontSize:'32px'
  }
  

  constructor() { }

  ngOnInit() {
  }

}
