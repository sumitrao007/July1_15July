import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { CourseService } from './service-component/course.service';
import { Course1Component } from './course1/course1.component';
import { HttpservicesComponent } from './httpservices/httpservices.component';
import { HttpModule } from '@angular/http';
import { HttpserviceService } from './httpservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponentComponent,
    Course1Component,
    HttpservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    CourseService,
    HttpserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
