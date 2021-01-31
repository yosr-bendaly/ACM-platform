import { IRole } from './../../interfaces/user';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { NavigationExtras,Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: IRole[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }
  /*
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  */

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    //  this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['home']);
      //  this.roles = this.tokenStorage.getUser().roles;
       // console.log(this.roles);
      //  this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    /*if(this.isLoggedIn){
      this.router.navigate(['home']);
    }
    */
  }

  reloadPage(): void {
    window.location.reload();
  }

}
