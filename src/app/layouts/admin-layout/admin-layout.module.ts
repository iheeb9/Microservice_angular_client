import { ModifierCategorieComponent } from './categorie/modifier-categorie/modifier-categorie.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AjouterCategorieComponent } from './categorie/ajouter-categorie/ajouter-categorie.component';
import { ListeCategorieComponent } from './categorie/liste-categorie/liste-categorie.component';
import { AjouterTrottinetteComponent } from './trottinette/ajouter-trottinette/ajouter-trottinette.component';
import { ModifierTrottinetteComponent } from './trottinette/modifier-trottinette/modifier-trottinette.component';
import { DetailsTrottinetteComponent } from './trottinette/details-trottinette/details-trottinette.component';
import { ListTrottinetteComponent } from './trottinette/list-trottinette/list-trottinette.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

import { ListBaladeComponent } from './balade/list-balade/list-balade.component';
import { AddBaladeComponent } from './balade/add-balade/add-balade.component';
import { UpdateBaladeComponent } from './balade/update-balade/update-balade.component';

import { LocationComponent } from './location/location.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { UpdateLocationComponent } from './location/update-location/update-location.component';
import {ChartsModule} from 'ng2-charts';
import { UpdateReviewComponent } from './review/update-review/update-review.component';
import { CreateComponent } from './review/create/create.component';
import { ListComponent } from './review/list/list.component';
import { ShowReviewComponent } from './review/show-review/show-review.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ChartsModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
    ,
  ],
  declarations: [
    DashboardComponent,
    AjouterCategorieComponent,
    ModifierCategorieComponent,
    ListeCategorieComponent,
    AjouterTrottinetteComponent,
    ModifierTrottinetteComponent,
    DetailsTrottinetteComponent,
    ListTrottinetteComponent,
    ListBaladeComponent,
    AddBaladeComponent,
    UpdateBaladeComponent,
    UpdateReviewComponent,
    CreateComponent,
    ListComponent,
    ShowReviewComponent,
    LocationComponent,
    AddLocationComponent,
    UpdateLocationComponent,

  ]
})

export class AdminLayoutModule {}
