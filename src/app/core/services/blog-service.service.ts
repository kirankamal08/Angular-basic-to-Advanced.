import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

   postsData:any;
  constructor(private http:HttpClient) { }
  
  getBlogPosts() {
    const API_URL = 'htttp://coderbyte.com/api/challenges/json/all-posts';
    return this.http.get(API_URL);
  }
}
