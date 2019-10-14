import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

import {FormsModule} from '@angular/forms';
import { NgifdirectiveComponent } from './ngifdirective/ngifdirective.component';

@NgModule({
  declarations: [
    AppComponent,
    EventbindingComponent,
    NgifdirectiveComponent
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
