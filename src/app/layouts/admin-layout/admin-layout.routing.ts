import { Routes } from '@angular/router';

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
    { path: 'location',      component: LocationComponent },
    { path: 'addlocation',      component: AddLocationComponent },
    { path: 'updatelocation/:id',      component: UpdateLocationComponent },

];
