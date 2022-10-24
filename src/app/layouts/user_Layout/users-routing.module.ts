import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBaladeComponent } from '../admin-layout/balade/list-balade/list-balade.component';
import { HomeComponent } from '../user_Layout/home/home/home.component';
import { AllBaladeComponent } from './balade/all-balade/all-balade.component';
import { DetailBaladeComponent } from './balade/detail-balade/detail-balade.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, 
  { path: 'home', component:HomeComponent},
  { path: 'listbalade', component:AllBaladeComponent},
  { path: 'info_balade/:idbalade',      component: DetailBaladeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
