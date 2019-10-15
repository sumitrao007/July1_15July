import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';

 import {FormsModule} from '@angular/forms';
import { NgfordirectiveComponent } from './ngfordirective/ngfordirective.component';
import { NgswitchdirectiveComponent } from './ngswitchdirective/ngswitchdirective.component';

@NgModule({
  declarations: [
    AppComponent,
    IfdirectiveComponent,
    NgfordirectiveComponent,
    NgswitchdirectiveComponent
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
