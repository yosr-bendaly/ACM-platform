import { EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:IPost;
  @Input() index: number;

  @Output() deleted: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
 /*
  ngOnChanges(changes: SimpleChanges) {
    console.log(`post: ngOnChanges.`);
    for(let prop in changes) {
      console.log(`Prop Name: ${prop}. Prev Value: ${changes[prop].previousValue}. Current Value: ${changes[prop].currentValue}`);
    }
  }
  */
 onDelete(){
  this.deleted.emit(this.post.id);
 }

}
