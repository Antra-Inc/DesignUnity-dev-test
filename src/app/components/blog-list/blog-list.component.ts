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

  /*
  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      },
      complete: () => {
        console.log('Posts fetch complete');
      }
    });
  }


  filteredCards = this.posts; // Initially show all cards
  visibleCardsCount: number = 3; // Show 3 items initially

  // Method to filter cards by category
  filterByCategory(category: string) {
    if (category === 'all') {
      this.filteredCards = this.posts;
    } else {
      this.filteredCards = this.posts.filter(item => item.category === category);
    }
    this.visibleCardsCount = 3; // Reset visible cards to 3 when a category is clicked
  }

  // Method to load more cards
  loadMore() {
    this.visibleCardsCount += 3; // Show 3 more cards when load more is clicked
  }
*/

}
