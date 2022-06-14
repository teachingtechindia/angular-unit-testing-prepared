import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PostModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private HttpClient: HttpClient) {}

  getAllPosts() {
    return this.HttpClient.get<PostModel[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
