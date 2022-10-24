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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule  ,
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
  ]
})

export class AdminLayoutModule {}
