import { Routes } from '@angular/router';
import { AddBaladeComponent } from './balade/add-balade/add-balade.component';
import { ListBaladeComponent } from './balade/list-balade/list-balade.component';
import { UpdateBaladeComponent } from './balade/update-balade/update-balade.component';

import { DashboardComponent } from './dashboard/dashboard.component';

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

];
