import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Comment[];
  @Output() OnDelete = new EventEmitter<Comment>();
  constructor() { }

  ngOnInit() {
  }

  deleteComment(comment: Comment) {
    this.OnDelete.emit(comment);
  }

}
