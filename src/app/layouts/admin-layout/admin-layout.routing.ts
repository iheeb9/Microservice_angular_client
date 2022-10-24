import { ModifierCategorieComponent } from './categorie/modifier-categorie/modifier-categorie.component';
import { DetailsTrottinetteComponent } from './trottinette/details-trottinette/details-trottinette.component';
import { ModifierTrottinetteComponent } from './trottinette/modifier-trottinette/modifier-trottinette.component';
import { ListTrottinetteComponent } from './trottinette/list-trottinette/list-trottinette.component';
import { AjouterTrottinetteComponent } from './trottinette/ajouter-trottinette/ajouter-trottinette.component';
import { ListeCategorieComponent } from './categorie/liste-categorie/liste-categorie.component';

import { Routes } from '@angular/router';
import { AjouterCategorieComponent } from './categorie/ajouter-categorie/ajouter-categorie.component';

import { DashboardComponent } from './dashboard/dashboard.component';

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



];
