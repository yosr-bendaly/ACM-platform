import { IUser } from '../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    users:IUser[];
  subscription:Subscription;
  constructor(private userService:UserService,private router: Router,private activatedRoute:ActivatedRoute) { }

  //equivalent to @PostConstruct
  ngOnInit(): void {
   this.getAllUsers();
  // this.activatedRoute.data.forEach(data => this.users=data.users);
  }

  getAllUsers(){
    this.subscription =this.userService.getAllUsers().subscribe(
      users => this.users=users
     );
   return this.subscription;
      
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 /*
  showDetails(user){
    this.router.navigate(['/members/', user.id])
  }
  */
}
