import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ListBaladeComponent } from './balade/list-balade/list-balade.component';
import { AddBaladeComponent } from './balade/add-balade/add-balade.component';
import { UpdateBaladeComponent } from './balade/update-balade/update-balade.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    ListBaladeComponent,
    AddBaladeComponent,
    UpdateBaladeComponent,
  ]
})

export class AdminLayoutModule {}
