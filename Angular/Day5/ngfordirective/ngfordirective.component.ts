import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfordirective',
  templateUrl: './ngfordirective.component.html',
  styleUrls: ['./ngfordirective.component.css']
})
export class NgfordirectiveComponent implements OnInit {

  course=['Angular 2+','React Js','Vue Js','MEAN Stack','Cloud'];
  
  product=[
    {
      Name:"Shahi Utane",
      quantity:"60Gm",
      price:54
    },
    {
      Name:"Shahi Utane",
      quantity:"100Gm",
      price:95
    },
    {
      Name:"Shahi Utane",
      quantity:"120Gm",
      price:108
    },
  ];

  selected;
  constructor() { }

  ngOnInit() {
  }

  Mouseoverevent(item){
    console.log("Mouse Over Event Occur!!!!");
    console.log(item.price);

    this.selected=item.price;

  }

}
