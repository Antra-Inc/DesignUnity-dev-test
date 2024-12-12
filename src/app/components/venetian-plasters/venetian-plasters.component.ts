import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-venetian-plasters',
  templateUrl: './venetian-plasters.component.html',
  styleUrls: ['./venetian-plasters.component.scss'],
})
export class VenetianPlastersComponent implements OnInit {
  layout = 1;
  Tab = '';
  tabTitles = ['ALL', 'Viero', 'Bericalce', 'GG&F'];
  tabs: { tabTitle: string; tabContent: any[] }[] = [];
  images!: any;
  contentData: any;
  itemsToShow: any[] = []; // Array to hold the items to be displayed
  currentIndex: any = 0; // Track the current index of loaded items
  moreBtn = false;
  categories: any[] = [];
  error: any;
  isLoading = false;
  posts: any[] = [];
  itemsIncrement: any = 4; // Number of items to add each time "Load More" is clicked
  constructor(
    private http: HttpClient,
    private postService: WordpressService
  ) {}
  public getJSON(): Observable<any> {
    return this.http.get('./assets/solutions.json');
  }
  ngOnInit(): void {
    this.loadCategories();
    localStorage.setItem('currentIndex', '0');
    localStorage.setItem('itemsIncrement', '4');
    // this.currentIndex = localStorage.getItem('currentIndex');
    // this.itemsIncrement = localStorage.getItem('itemsIncrement');
    console.log('count', this.currentIndex, this.itemsIncrement);
    this.tabs = this.tabTitles.map((title) => {
      return {
        tabTitle: title,
        // tabContent: this.getDynamicTabsData(title),
        tabContent: this.contentData,
      };
    });
  }
  changeLayout(data: any): void {
    this.layout = data;
    console.log('datasdsd', this.layout, data);
  }

  getDynamicTabsData(imagesType: string): any[] {
    console.log('imagesType', imagesType);
    switch (imagesType) {
      case 'ALL':
        this.contentData = [
          ...this.images.Viero.slice(0, 4),
          ...this.images.Bericalce.slice(0, 4),
          ...this.images.GGF.slice(0, 4),
        ];

        console.log('Luxury contentData', this.contentData);
        break;
      case 'Viero':
        this.contentData = this.images.Viero;
        console.log('Institutional contentData', this.contentData);
        break;
      case 'Bericalce':
        this.contentData = this.images.Bericalce;
        console.log('Institutional contentData', this.contentData);
        break;
      case 'GG&F':
        this.contentData = this.images.GGF;
        console.log('Institutional contentData', this.contentData);
        break;
      default:
        this.contentData = '';
        break;
    }
    // console.log('this.contentData', this.contentData);
    return this.contentData;
  }

  changeTabs(labeldata: any) {
    console.log('images11', labeldata, this.images);
    this.getJSON().subscribe((data: any) => {
      this.images = data;
      this.getDynamicTabsData(labeldata);
      this.loadItems();
      console.log('images', this.images);
    });
    this.currentIndex = 0;
    this.itemsIncrement = 4;
  }

  loadItems() {
    this.itemsToShow = this.contentData.slice(0, 4);
    if (this.itemsToShow.length < this.contentData.length) {
      this.moreBtn = true;
    }
    console.log('this.contentData', this.itemsToShow, this.contentData.length);
  }

  loadMoreItems() {
    if (this.currentIndex === 0) {
      this.currentIndex = 4;
      this.itemsIncrement = 4;
    }
    if (this.itemsToShow.length < this.contentData.length) {
      this.moreBtn = true;
    }
    const nextIndex = this.currentIndex + this.itemsIncrement;
    this.itemsToShow = this.contentData.slice(0, nextIndex);
    this.currentIndex = nextIndex;

    console.log(
      'this.contentData',
      nextIndex,
      this.currentIndex,
      this.itemsIncrement,
      this.itemsToShow.length,
      this.contentData.length
    );
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
        this.posts = data;
        console.log('blogs', this.posts);

        this.isLoading = false;
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      },
    });
  }
}
