import { UserService } from 'src/app/services/user/user.service';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public user:IUser;
  form: any = {};
  isSuccessful = false;
  isUpdateFailed = false;
  errorMessage = '';

  constructor(private tokenstorage:TokenStorageService,private userService:UserService) { }

  ngOnInit() {
   this.user=this.tokenstorage.getUser();
  
     /*
    this.userService.getUserById(this.user.id).subscribe(
   
      u => {
      this.user.email=u.email;
      this.user.name=u.email;
      this.user.roles=u.roles;
    }this.authService.register(this.form)
    
   );
   */
  }

  editProfile(){
    
    this.userService.updateUser(this.user.id,this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isUpdateFailed = false;
        console.log("success");
        
      },
      err => {
        this.errorMessage = err.error.message;
        console.log("there is an error");
        this.isUpdateFailed = true;
      }
    );;
  }

}
