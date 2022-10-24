import { ModifierCategorieComponent } from './categorie/modifier-categorie/modifier-categorie.component';
import { DetailsTrottinetteComponent } from './trottinette/details-trottinette/details-trottinette.component';
import { ModifierTrottinetteComponent } from './trottinette/modifier-trottinette/modifier-trottinette.component';
import { ListTrottinetteComponent } from './trottinette/list-trottinette/list-trottinette.component';
import { AjouterTrottinetteComponent } from './trottinette/ajouter-trottinette/ajouter-trottinette.component';
import { ListeCategorieComponent } from './categorie/liste-categorie/liste-categorie.component';

import { Routes } from '@angular/router';
import { AjouterCategorieComponent } from './categorie/ajouter-categorie/ajouter-categorie.component';
import { AddBaladeComponent } from './balade/add-balade/add-balade.component';
import { ListBaladeComponent } from './balade/list-balade/list-balade.component';
import { UpdateBaladeComponent } from './balade/update-balade/update-balade.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { LocationComponent } from './location/location.component';
import { UpdateLocationComponent } from './location/update-location/update-location.component';
import { CreateComponent } from './review/create/create.component';
import { ListComponent } from './review/list/list.component';
import { ShowReviewComponent } from './review/show-review/show-review.component';
import { UpdateReviewComponent } from './review/update-review/update-review.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      }, 
    { path: 'dashboard',      component: DashboardComponent },

    { path: 'acat',      component: AjouterCategorieComponent },
    { path: 'lcat',      component: ListeCategorieComponent },
    { path: 'ucat/:id',      component: ModifierCategorieComponent },


    { path: 'atrot',     component: AjouterTrottinetteComponent },
    { path: 'ltrot',      component: ListTrottinetteComponent },
    { path: 'utrot/:id',      component: ModifierTrottinetteComponent },
    { path: 'dtrot',      component: DetailsTrottinetteComponent },
  
    { path: 'ListReview',      component:ListComponent },
    { path: 'UpdateReview/:id',      component:UpdateReviewComponent },
    { path: 'AddReview',      component: CreateComponent },
    { path: 'ShowReview/:id',      component: ShowReviewComponent },


    { path: 'list_balade',      component: ListBaladeComponent },
    { path: 'add_balade',      component: AddBaladeComponent },
    { path: 'update_balade/:idbalade',      component: UpdateBaladeComponent },

    { path: 'location',      component: LocationComponent },
    { path: 'addlocation',      component: AddLocationComponent },
    { path: 'updatelocation/:id',      component: UpdateLocationComponent },


];
