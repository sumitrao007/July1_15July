import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id1:number=0;
  myid1:number=0;
  myusername:string='';

  queryobj={
    order:1,
    brand:'Renuka Group',
    quantity:2,
    price:100
  };

  constructor(private router:Router) { }

  ngOnInit() {
    this.id1=9;
    this.myid1=8;
    this.myusername='Sumit';
  }

  onPage1(){

    this.id1=10;
    this.router.navigate(['/Page1',this.id1]);
  }

  onPage2(){
    this.myid1=62;
    this.myusername="Himanshu";
    this.router.navigate(['/Page2',this.myid1,this.myusername]);
  }
  onfollower(){
    this.router.navigate(['/Follower'])
  }
  onqueryparam(){
  //   this.router.navigate(['/QueryParam'],{ queryParams: { order: this.id1,
  //   brand:"Sumit",
  //   quantity:2,
  //   price:100
  //  } });

     this.router.navigate(['/QueryParam'],{ queryParams: this.queryobj });
  }

}
