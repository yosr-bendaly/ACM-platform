import { HasRoleDirective } from './../../directives/has-role.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { IconsComponent } from 'src/app/pages/icons/icons.component';
import { TablesComponent } from 'src/app/pages/tables/tables.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { MainLayoutRoutes } from './main-layout.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { ComponentsModule } from 'src/app/components/components.module';
import { UsersListComponent } from 'src/app/pages/users-list/users-list.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { PostComponent } from 'src/app/pages/post/post.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
   DashboardComponent,
    HomeComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
   UsersListComponent,
   UserComponent,
   PostComponent,
   HasRoleDirective,
   
   
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule
  ]
})
export class MainLayoutModule { }
