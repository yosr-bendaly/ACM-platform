import { IPost } from './../../interfaces/post';
import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js';
import { PostService } from 'src/app/services/post/post.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public clicked: boolean = true;
 public clicked1: boolean = false;

  form: any = {};
  isSuccessful:boolean=false;
  errorMessage='';
  loggedInUser:IUser;
  userRole:string;
  public posts:IPost[];
constructor(private postService:PostService,private tokenService:TokenStorageService){
  
}
  ngOnInit():void {

   this.getAllPost();

 

    //this.userRole="admin";
  }

  onSubmit(){
this.postService.createPost(this.form).subscribe(
  data => {
    console.log(data);
    this.isSuccessful = true;
    //this.isSignUpFailed = false;
    console.log("success");
  },
    
  err => {
   this.errorMessage = err.error.message;
    console.log("there is an error");
   // this.isSignUpFailed = true;
  }
);
  }
/*
  onPostDelete($event){
    this.postService.deletePost($event).subscribe(
      () => console.log('Delete successful')
    );
  }
  */
/*The component isn't expecting a result from the delete operation, so it subscribes without a callback. Even though you are not using the result, you still have to subscribe. 
Calling the subscribe() method executes the observable, which is what initiates the DELETE request.
An HttpClient method does not begin its HTTP request until you call subscribe() on the observable returned by that method. 
This is true for all HttpClient methods.
Calling subscribe(...) triggers execution of the observable and causes HttpClient to compose and send the HTTP request to the server.
*/

getAllPost(){
  this.postService.getAllPost().subscribe(data=>this.posts=data);
} 

}

