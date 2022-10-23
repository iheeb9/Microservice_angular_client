import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotfoundComponent } from './components/all/notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';
import { UsersComponent } from './layouts/user_Layout/users.component';
import {EventsComponent} from './back/events/events.component';
import { DetailsEventComponent } from './back/details-event/details-event.component';
import { AddEventComponent } from './back/add-event/add-event.component';
const routes: Routes =[
  
  /*-------------------Events--------------------------*/
  {
    path : 'events',
    component: EventsComponent,
    canActivate:[] 
  },
  { path: 'event/:id', component: DetailsEventComponent },

  { path: 'event/add', component: AddEventComponent },


    /*-------------------Events--------------------------*/

{
    /*-------------------Events--------------------------*/
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[] 
    
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x=>x.AdminLayoutModule),
      canActivate:[]
  }]},
  {
    path: 'user',
    component: UsersComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/user_Layout/users.module').then(x=>x.UsersModule),
      canActivate:[]
  }]},
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
