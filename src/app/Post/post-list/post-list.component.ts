import { Component, Input  } from "@angular/core";

import { Post } from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {

  // post=[
  //   {title: "First Post", content: "This is the first content", elements: ""},
  //   {title: "First Post", content: "This is the first content", elements: ""},
  //   {title: "First Post", content: "This is the first content", elements: ""}
  // ]

  @Input()
  posts : Post[] = [];
}
