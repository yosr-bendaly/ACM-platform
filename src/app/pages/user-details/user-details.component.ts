import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:any;
  constructor(private activatedRoute: ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params)=> {//params defined in the path of routes
     // console.log('got the param as',params);
    // this.user=this.users.filter((user)=>{ return user.id===+params.id})[0];
   /* this.userService.getUserById(+params['id']).subscribe(
      user=>this.user=user,
      err=>console.log("error:",err),
      ()=>alert('fetch of user details completed')
    );
    */
   this.userService.getUserByUserName(params['username']).subscribe(
    user=>this.user=user,
    err=>console.log("error:",err),
    ()=>alert('fetch of user details completed')
  );
    })
    
   
  }

}
