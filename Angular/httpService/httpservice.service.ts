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
  addpost(createdata){
  return this.http.post(this.url,JSON.stringify(createdata))
  }

  upadtepost(item){
    return this.http.put(this.url+"/"+item.id,item)
  }
  
  DeletePost(item){
    return this.http.delete(this.url+"/"+item.id);
  }

}
