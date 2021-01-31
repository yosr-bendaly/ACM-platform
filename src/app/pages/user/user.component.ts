import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/app/interfaces/user';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
@Input() user:any;
//@Output() show: EventEmitter<any> = new EventEmitter<any>();
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    
  }
  /*
 goToDetails(){
  this.show.emit(this.user);
 }
 */

}
