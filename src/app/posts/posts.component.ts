import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get(this.url)
    .subscribe((resp) => {
      this.posts = resp;
    });
  }

  createPost(inputTitle) {
    const post = {test: inputTitle.value};
    this.http.post(this.url, post)
    .subscribe((resp) => {
      console.log('response from post:', resp);
    });
  }

}
