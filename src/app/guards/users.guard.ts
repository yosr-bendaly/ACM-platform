import { IUser } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
//import { IUser } from '../interfaces/user';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements Resolve<IUser[]> {
  users:IUser[];
  constructor(private userService: UserService){
    
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser[] | Observable<IUser[]> | Promise<IUser[]> {
  
     this.userService.getAllUsers().subscribe(
        users => this.users=users
       );
   return this.users;
  }

  
}
