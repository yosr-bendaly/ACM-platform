import { Routes } from '@angular/router';

//import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { HomeComponent } from 'src/app/pages/home/home.component';


export const AdminLayoutRoutes: Routes = [
   // { path: 'dashboard',      component: DashboardComponent },
    { path: 'home',           component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
   
   // { path: 'maps',           component: MapsComponent }
];
