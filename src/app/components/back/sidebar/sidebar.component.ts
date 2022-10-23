import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
   // { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
   //{ path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '', title: 'trottinette',  icon:'users_single-02', class: '' },
    { path: 'location', title: 'location',  icon:'users_single-02', class: '' },
    { path: '', title: 'evennement',  icon:'users_single-02', class: '' },
    { path: '', title: 'association',  icon:'users_single-02', class: '' },
    { path: '', title: 'review',  icon:'users_single-02', class: '' },
    { path: '', title: 'balade',  icon:'users_single-02', class: '' },

  //  { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
  //  { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
   // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
