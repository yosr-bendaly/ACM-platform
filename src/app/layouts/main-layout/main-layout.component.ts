import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public loggedInUserName:string;

  public isLoggedIn=false;
  public userToken:string;
  constructor(private token:TokenStorageService,private userService:UserService) { }

  ngOnInit(): void {
    //let token=this.token.getToken;
    this.userToken=this.token.getToken();
    if(this.userToken){
      this.userService.getUserByToken().subscribe(user=>this.loggedInUserName=user.username)
      console.log(this.loggedInUserName);
      this.isLoggedIn=true;
    }
  }
  signOut():void{
    this.token.signOut();
    this.isLoggedIn=false;
    //this.loggedInUserName=this.token.getUser().username;
  }

}
