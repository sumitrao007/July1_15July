import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';
import { TdfFormComponent } from './tdf-form/tdf-form.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapdemoComponent,
    TdfFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
