import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  queryob={};
  constructor(private router:ActivatedRoute) { 

  }

  ngOnInit() {

    this.router.queryParamMap
    .subscribe(param=>{
      console.log(param.get('order'));
      console.log(param.get('brand'));
      this.queryob={
        order1:+param.get('order'),
        brand : param.get('brand'),
        quantity: param.get('quantity'),
        price: param.get('price')
      }
    })

  }

}
