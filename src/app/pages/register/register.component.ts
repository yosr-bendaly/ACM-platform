import { TokenStorageService } from './../../services/token/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private token:TokenStorageService) { }

  ngOnInit(): void {
    this.isSuccessful = false;
  this.isSignUpFailed = false;
  }

  onSubmit(): void {
    console.log(this.authService.register(this.form));
    
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log("success");
        /*
        this.authService.login(data).subscribe( data => {
          this.token.saveToken(data.accessToken);
          this.token.saveUser(data);
          console.log(data);
        }
        ,
        err => {
          this.errorMessage = err.error.message;
         // this.isLoginFailed = true;
        });*/
      },
      err => {
        this.errorMessage = err.error.message;
        console.log("there is an error");
        this.isSignUpFailed = true;
      }
    );
   // this.authService.login(this.form);
  }

}
