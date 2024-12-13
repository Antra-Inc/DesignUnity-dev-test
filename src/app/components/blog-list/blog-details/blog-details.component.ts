import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../wordpress.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  post: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private postService: WordpressService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
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
}
