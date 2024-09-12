import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
 

  posts: any[] = [];
  categories: any[] = [];
  selectedCategory: number | null = null;
  currentPage: number = 1;
  postsPerPage: number = 6;
  loadMoreAmount: number = 3;
  isLoading = true;
  error: any;

  constructor(private postService: WordpressService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadPosts();
  }


  loadCategories(): void {
    this.postService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      }
    });
  }

  loadPosts(categoryId?: number): void {
    this.isLoading = true;
    this.postService.getPosts(categoryId).subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      }
    });
  }

  filterByCategory(categoryName: string): void {
    if (categoryName === 'all') {
      this.loadPosts();
    } else {
      const category = this.categories.find(c => c.name === categoryName);
      if (category) {
        this.loadPosts(category.id);
      }
    }
  }
  

}
