import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-test',
  templateUrl: './blog-test.component.html',
  styleUrls: ['./blog-test.component.scss']
})
export class BlogTestComponent {
  items: string[] = Array(12).fill('Content');
  visibleItems: string[] = [];
  initialVisibleItems: number = 4; // Initial number of visible items
  itemsToShow: number = 4;         // Number of items to show on each load

  constructor() {
    this.visibleItems = this.items.slice(0, this.initialVisibleItems);
  }

  loadMore(event: Event): void {
    event.preventDefault();
    const nextIndex = this.visibleItems.length + this.itemsToShow;
    this.visibleItems = this.items.slice(0, nextIndex);

    // Optionally scroll to the load button
    setTimeout(() => {
      document.querySelector('html,body')?.scrollTo({
        top: (event.target as HTMLElement).offsetTop,
        behavior: 'smooth'
      });
    }, 0);
  }

  loadLess(event: Event): void {
    event.preventDefault();
    this.visibleItems = this.items.slice(0, this.initialVisibleItems);

    // Optionally scroll to the load button
    const desiredHeight = window.innerHeight;
    setTimeout(() => {
      document.querySelector('html,body')?.scrollTo({
        top: (event.target as HTMLElement).offsetTop + desiredHeight,
        behavior: 'smooth'
      });
    }, 0);
  }
}
