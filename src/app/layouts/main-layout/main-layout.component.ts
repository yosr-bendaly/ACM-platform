import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public loggedInUserName:string;
  public isLoggedIn=false;
  constructor(private token:TokenStorageService) { }

  ngOnInit(): void {
    if(this.token.getUser()!=null){
      this.loggedInUserName=this.token.getUser().username;
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
