import { UsersGuard } from './../../guards/users.guard';
import { AuthGuard } from './../../guards/auth.guard';
import { Routes } from '@angular/router';

//import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { UsersListComponent } from 'src/app/pages/users-list/users-list.component';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { UserDetailsComponent } from 'src/app/pages/user-details/user-details.component';

export const MainLayoutRoutes: Routes = [
  
    { path: 'home',           component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    {path: 'members',          component: UsersListComponent,
    resolve:{
        users:UsersGuard
    },
   // pathMatch:"prefix",
    children :[
        {path:'username', component:UserDetailsComponent}]
    },
    {path: 'chat',          component: ChatComponent,canActivate:[AuthGuard] },
    { path: 'dashboard',      component: DashboardComponent }
  
];
