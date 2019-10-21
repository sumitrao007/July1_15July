import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-httpservices',
  templateUrl: './httpservices.component.html',
  styleUrls: ['./httpservices.component.css']
})
export class HttpservicesComponent implements OnInit {

  posts=[];

 // url:string="https://jsonplaceholder.typicode.com/posts";
  //constructor(private http:Http) { }

  constructor(private service:HttpserviceService) { }
foo:string;
  ngOnInit() {
   // this.http.get(this.url)
   this.service.getposts()
      .subscribe(respose=>{
      console.log(respose.json())
      this.posts=respose.json();
    });

    
  }


}
