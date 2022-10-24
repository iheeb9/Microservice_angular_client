import { Routes } from '@angular/router';
import { AddBaladeComponent } from './balade/add-balade/add-balade.component';
import { ListBaladeComponent } from './balade/list-balade/list-balade.component';
import { UpdateBaladeComponent } from './balade/update-balade/update-balade.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { LocationComponent } from './location/location.component';
import { UpdateLocationComponent } from './location/update-location/update-location.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      }, 
    { path: 'dashboard',      component: DashboardComponent },

    { path: 'list_balade',      component: ListBaladeComponent },
    { path: 'add_balade',      component: AddBaladeComponent },
    { path: 'update_balade/:idbalade',      component: UpdateBaladeComponent },

    { path: 'location',      component: LocationComponent },
    { path: 'addlocation',      component: AddLocationComponent },
    { path: 'updatelocation/:id',      component: UpdateLocationComponent },


];
