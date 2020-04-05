import { Component } from '@angular/core';

import { Post } from "./Post/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "MeanStack";
  storedPost : Post[] = [];

  onPostAdded(post){
    this.storedPost.push(post);
  }
}
