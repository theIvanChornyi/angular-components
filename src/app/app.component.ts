import { Component } from '@angular/core';

export interface IPost {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: IPost[] = [
    { title: 'Learning Angular', text: 'First steps in Angular', id: 1 },
    { title: 'Learning React', text: 'First steps in React', id: 2 },
    { title: 'Learning Vue', text: 'First steps in Vue', id: 3 },
  ];
  addPostToEnd(post: IPost) {
    this.posts.unshift(post);
  }
  deletePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
