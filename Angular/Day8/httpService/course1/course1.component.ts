import { Component, OnInit } from '@angular/core';
import { CourseService } from './../service-component/course.service';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit {
couser=[];
  constructor(private service1:CourseService) {      

   }

  ngOnInit() {
  }

}
