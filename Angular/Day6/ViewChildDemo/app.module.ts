import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './MyHome.component';
import { ChildComponent } from './child.component';
import { RealtimeComponent } from './Realtime.component';
import { ListOfSongsComponent } from './listofsongs.component';
import { SideBarComponent } from './sidebar.comopnent';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    ChildComponent,
    RealtimeComponent,
    ListOfSongsComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
