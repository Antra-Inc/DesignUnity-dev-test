import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
 

  posts: any[] = [];
  isLoading = true;
  error: any;

  constructor(private postService: WordpressService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

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



  items = [
    {
      category: 'Venetian Plasters',
      img: '../../../assets/img/flooring/banner.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Flooring',
      img: '../../../assets/img/flooring/5.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Flooring',
      img: '../../../assets/img/flooring/4.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Venetian Plasters',
      img: '../../../assets/img/flooring/1.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Flooring',
      img: '../../../assets/img/flooring/2.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Flooring',
      img: '../../../assets/img/flooring/6.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Venetian Plasters',
      img: '../../../assets/img/flooring/banner.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Flooring',
      img: '../../../assets/img/flooring/5.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Flooring',
      img: '../../../assets/img/flooring/4.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Venetian Plasters',
      img: '../../../assets/img/flooring/1.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Flooring',
      img: '../../../assets/img/flooring/2.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    },
    {
      category: 'Flooring',
      img: '../../../assets/img/flooring/6.png',
      heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum obcaecati odit provident fuga, nemo porro illum laboriosam'
    }
  ]


  
  filteredCards = this.items; // Initially show all cards
  visibleCardsCount: number = 6; // Show 3 items initially

  // Method to filter cards by category
  filterByCategory(category: string) {
    if (category === 'all') {
      this.filteredCards = this.items;
    } else {
      this.filteredCards = this.items.filter(item => item.category === category);
    }
    this.visibleCardsCount = 6; // Reset visible cards to 3 when a category is clicked
  }

  // Method to load more cards
  loadMore() {
    this.visibleCardsCount += 3; // Show 4 more cards when load more is clicked
  }


}
