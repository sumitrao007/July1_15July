import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QueryparamComponent } from './queryparam/queryparam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    FollowerComponent,
    MyfollowerComponent,
    PagenotfoundComponent,
    QueryparamComponent
  ],
  imports: [
 
  BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path:'',
    //     component:HomeComponent
    //   },
    //   {
    //     path:"Page1/:id",
    //     component:Page1Component
    //   },
    //   {
    //     path:"Page2/:id/:username",
    //     component:Page2Component
    //   },
    //   {
    //     path:"Follower",
    //     component:FollowerComponent
    //   },
    //   {
    //     path:"MyFollower",
    //     component:MyfollowerComponent
    //   },
    //   {
    //     path:"QueryParam",
    //     component:QueryparamComponent
    //   },
    //   {
    //     path:"**",
    //     component: PagenotfoundComponent
    //   }
      

    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
