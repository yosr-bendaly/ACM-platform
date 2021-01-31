import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersListComponent } from '../pages/users-list/users-list.component';
import { HeaderComponent } from './header/header.component';

import { ChatComponent } from './chat/chat.component';
import { UserComponent } from '../pages/user/user.component';
import { UserDetailsComponent } from '../pages/user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
  
    ChatComponent,
    UserDetailsComponent,
   // UserComponent,
   
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
