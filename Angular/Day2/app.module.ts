import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { Test1Component } from './test1.component';
import { StudentComponent } from './student.component';
import { EmpolyeeComponent } from './empolyee/empolyee.component';
import { PropertyBinding } from './propertyBinding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    StudentComponent,
    EmpolyeeComponent,
    PropertyBinding
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
