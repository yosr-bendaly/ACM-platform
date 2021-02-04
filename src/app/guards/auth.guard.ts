import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public currentUser:IUser;
  constructor(
    private router: Router,
    private authService: TokenStorageService,
    private userService: UserService
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //const currentUser = this.authService.getUser();
   this.userService.getUserByToken().subscribe(user=>this.currentUser=user);
        if (this.currentUser) {
            // check if route is restricted by role
           // if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
               // this.router.navigate(['/']);
               // return false;
               return true;
          //  }
 
            // authorised so return true
           // return true;
          
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
  }
  
}
