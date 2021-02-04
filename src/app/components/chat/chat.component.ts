import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private serverUrl = 'http://localhost:8082/socket'
  private title = 'WebSockets chat';
  private stompClient;

  users : IUser[]=[];
  selectedUser : IUser;
  content = '';
  me : IUser;
  messages : any[] = [];
  constructor(private tokenstorage:TokenStorageService) { 
    this.initializeWebSocketConnection();
  }

  ngOnInit(): void {
  }

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    //let userName=this.tokenstorage.getUser().username;
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message){
    this.stompClient.send("/app/send/message" , {}, message);
    $('#input').val('');
  }
  
}
