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
  ishiden:boolean=true;
  myid:number=0;
  mytitle:string='';
  mybody:string='';

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
    },error=>{
      alert('Unexpectated Error Occur!!!!!');
    });
    
  }

  onAdd(value){
    let createdata={
      title:value
    };
    this.service.addpost(createdata)
    .subscribe(response=>{
      console.log(response.json());
      let id=response.json().id;
      console.log("Parsing Json... "+id);
      let temp={
        id:id,
        title:value
      };
      this.posts.splice(0,0,temp);

    })
  }

  // onUpdate(item){
  //   this.service.upadtepost(item)
  //   .subscribe(response=>{
  //     console.log(response.json());
  //   });
  // }


  onUpdate(item){
    this.ishiden=false;
    this.myid=item.id;
    this.mytitle=item.title;
    this.mybody=item.body;
  }

  Updatedata(){
    let updateobj={
      id:this.myid,
      title:this.mytitle,
      body: this.mybody
    };
    this.service.upadtepost(updateobj)
    .subscribe(response=>{
      console.log(response.json());
      let updateobj={
        id:response.json().id,
        title: response.json().title,
        body: response.json().body
      };

      this.posts.splice(updateobj.id-1,0,updateobj);

    });
  }
  onDelete(item){
    this.service.DeletePost(item)
    .subscribe(response=>{
      console.log(response.json());
      this.posts.splice(item.id-1,1);
    });
  }

}
