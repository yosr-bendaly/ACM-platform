import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  users : IUser[]=[];
  selectedUser : IUser;
  content = '';
  me : IUser;
  messages : any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    
  }
}
