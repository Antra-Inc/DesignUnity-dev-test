import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { WordpressService } from '../../wordpress.service';
import { filter } from 'rxjs';
import { ScrollToService } from 'src/app/service/scroll-to.service';
import { TitleService } from 'src/app/service/title.service';
import { MetaTagsService } from 'src/app/service/meta-tags.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  post: any;
  isLoading = true;
  categories: any[] = [];
  posts: any[] = [];
  error: any;
  constructor(
    private route: ActivatedRoute,
    private postService: WordpressService,
    private router: Router,
    private scrollToTopService: ScrollToService,
    private titleService: TitleService,
    private metaTagsService: MetaTagsService
  ) {}

  ngOnInit(): void {
    this.titleService.setPageTitle(
      'A curated list of blogs on surface finishes & designs'
    );

    // Set meta tags
    this.metaTagsService.setDescription(
      `Here’s an overview of wall, floor & ceiling surface finish blogs from Design Unity. “Know hows” to choose finishes for your homes, studios & commercial spaces`
    );
    this.metaTagsService.setKeywords('');
    // const id = this.route.snapshot.paramMap.get('id');
    this.loadCategories();
    const id = localStorage.getItem('blogId');
    console.log('Post ID:', id);
    if (id) {
      this.postService.getPostById(id).subscribe({
        next: (data: any) => {
          console.log('Post data:', data);
          this.post = data;
        },
        error: (error) => {
          console.error('Error fetching post:', error);
        },
      });
    }
  }
  loadCategories(): void {
    const categoryName = 'Venetian Plasters';
    this.postService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        const category = this.categories.find((c) => c.name === categoryName);
        if (category) {
          this.loadPosts(category.id);
        }
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      },
    });
  }

  loadPosts(categoryId?: number): void {
    this.isLoading = true;
    this.postService.getPosts(categoryId).subscribe({
      next: (data) => {
        this.posts = data.slice(0, 3);
        console.log('blogs', this.posts);

        this.isLoading = false;
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      },
    });
  }
  loadBlog(post: any) {
    this.router.navigate(['/blogs', post.title.rendered]);
    localStorage.setItem('blogId', post.id);

    if (post.id) {
      this.postService.getPostById(post.id).subscribe({
        next: (data: any) => {
          console.log('Post data:', data);
          this.post = data;
          this.scrollToTopService.scrollToTop();
        },
        error: (error) => {
          console.error('Error fetching post:', error);
        },
      });
    }
  }
}
