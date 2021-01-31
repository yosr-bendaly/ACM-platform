import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UserService } from './services/user/user.service';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  /*
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:() => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  */
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:() => import('./layouts/main-layout/main-layout.module').then(m => m.MainLayoutModule)
      }
    ]
  },
   {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:() => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }
  /*
  , {
    path: '**',
    redirectTo: 'home'
  },
    { path: '**', component: PageNotFoundComponent }, 
  */
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
  providers:[UserService]
})
export class AppRoutingModule { }
