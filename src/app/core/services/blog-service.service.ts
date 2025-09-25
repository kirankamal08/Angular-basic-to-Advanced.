import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

   postsData:any;
  constructor(private http:HttpClient) { }
  getBlogPosts() {
  //  const API_URL = 'htttp://coderbyte.com/api/challenges/json/all-posts';
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(API_URL);
  }
}
