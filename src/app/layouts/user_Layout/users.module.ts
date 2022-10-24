import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { HomeComponent } from './home/home/home.component';
import { UsersRoutingModule } from './users-routing.module';
import { ComponentsModule } from 'app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TrottinetteComponent } from './trottinette/trottinette/trottinette.component';
import { AllBaladeComponent } from './balade/all-balade/all-balade.component';
import { DetailBaladeComponent } from './balade/detail-balade/detail-balade.component';
import { AddpostComponent } from './review/addpost/addpost.component';
import { ListComponent } from './review/list/list.component';
import { ShowFrontComponent } from './review/show-front/show-front.component';


@NgModule({
  declarations: [HomeComponent, AllBaladeComponent, DetailBaladeComponent,TrottinetteComponent,ListComponent, ShowFrontComponent, AddpostComponent
  ],
    imports: [
      ReactiveFormsModule,
        CommonModule,
        UsersRoutingModule,
        FormsModule,
        NgbModule,
        ToastrModule.forRoot(),
        ComponentsModule
    ]
})
export class UsersModule { }
