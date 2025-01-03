import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../wordpress.service';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/service/title.service';
import { MetaTagsService } from 'src/app/service/meta-tags.service';

@Component({
  selector: 'app-flooring-page',
  templateUrl: './flooring-page.component.html',
  styleUrls: ['./flooring-page.component.scss'],
})
export class FlooringPageComponent implements OnInit {
  categories: any[] = [];
  error: any;
  isLoading = false;
  posts: any[] = [];
  constructor(
    private postService: WordpressService,
    private router: Router,
    private titleService: TitleService,
    private metaTagsService: MetaTagsService
  ) {}
  ngOnInit(): void {
    this.titleService.setPageTitle(
      'Seamless Floorings | Microcements, Epoxy, Terrazzo finishes'
    );

    // Set meta tags
    this.metaTagsService.setDescription(
      'Our microcement flooring offers endless variety with rich textures, colours, and seamless style, durable, anti-skid, & high-performing finishes. Explore now!'
    );
    this.metaTagsService.setKeywords('microcement flooring');
    this.loadCategories();
  }
  loadCategories(): void {
    const categoryName = 'Flooring';
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
  }
}
