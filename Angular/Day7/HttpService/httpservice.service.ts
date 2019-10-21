import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) { }

  getposts(){
    return this.http.get(this.url);
  }

  

}
