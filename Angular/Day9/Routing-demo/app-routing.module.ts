import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparamComponent } from './queryparam/queryparam.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [ 
    {
      path:'',
      component:HomeComponent
    },
    {
      path:"Page1/:id",
      component:Page1Component
    },
    {
      path:"Page2/:id/:username",
      component:Page2Component
    },
    {
      path:"Follower",
      component:FollowerComponent
    },
    {
      path:"MyFollower",
      component:MyfollowerComponent
    },
    {
      path:"QueryParam",
      component:QueryparamComponent
    },
    {
      path:"**",
      component: PagenotfoundComponent
    } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
