import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipedemoComponent,
    CustompipeComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
