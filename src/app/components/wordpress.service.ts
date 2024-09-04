import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private apiUrl = 'http://localhost/du_blog_post/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}?_embed`);
  }

  // Fetch a single post by ID
  // getPost(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/posts/${id}`);
  // }

  // Fetch a single post by ID
  getPostById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}?_embed`);
  }
}


