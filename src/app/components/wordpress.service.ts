import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  /*
  private apiUrl = 'http://localhost/du_blog_post/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}?_embed`);
  }

  // Fetch a single post by ID
  getPostById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}?_embed`);
  }
*/



    private apiUrl = 'http://localhost/du_blog_post/wp-json/wp/v2';
    private postsUrl = `${this.apiUrl}/posts`;
    private categoriesUrl = `${this.apiUrl}/categories`;

    constructor(private http: HttpClient) { }

    getPosts(categoryId?: number): Observable<any> {
      const url = categoryId ? `${this.postsUrl}?categories=${categoryId}&_embed` : `${this.postsUrl}?_embed`;
      return this.http.get(url);
    }

    getCategories(): Observable<any> {
      return this.http.get(this.categoriesUrl);
    }

    getPostById(id: string): Observable<any> {
      return this.http.get(`${this.postsUrl}/${id}?_embed`);
    }

    
}

