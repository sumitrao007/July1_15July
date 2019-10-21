import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
  
  course=[];
  constructor(private service:CourseService) 
  {
   // let service=new CourseService();
    this.course=service.getcourse();
  }

  ngOnInit() {

  }

}
