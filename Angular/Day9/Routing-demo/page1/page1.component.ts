import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  urlid:number=0;
  constructor(private router:ActivatedRoute,private router1:Router) { 

    
  }

  ngOnInit() {
  this.router.paramMap
   .subscribe(param=>{
     console.log(param.get('id'))
     this.urlid=+param.get('id');
   }) 
  }
  onHome(){
    this.router1.navigate(['']);
  }

}
