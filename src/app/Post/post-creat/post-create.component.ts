import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from "../post.model";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.componet.css']
})

export class PostCreateComponent{
  enteredTitle = "";
  enteredContent = '';
  @Output()
  postCreated = new EventEmitter<Post>();

OnAddPost (){
const post: Post = {
  title: this.enteredTitle,
  content:this.enteredContent
}
this.postCreated.emit(post);

}




}
