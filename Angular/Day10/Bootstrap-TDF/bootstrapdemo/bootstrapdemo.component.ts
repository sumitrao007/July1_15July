import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapdemo',
  templateUrl: './bootstrapdemo.component.html',
  styleUrls: ['./bootstrapdemo.component.css']
})
export class BootstrapdemoComponent implements OnInit {
product=[
  {
    name:"Shahi utane",
    price:30,
    quantity:'30gm'
  },
  {
    name:"Shahi utane",
    price:30,
    quantity:'30gm'
  },
  {
    name:"Shahi utane",
    price:30,
    quantity:'30gm'
  },
  {
    name:"Shahi utane",
    price:30,
    quantity:'30gm'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
