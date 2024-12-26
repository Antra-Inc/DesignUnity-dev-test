import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { DialogService } from './service/dialog.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollToService } from './service/scroll-to.service';
import { MetaTagsService } from './service/meta-tags.service';
import { TitleService } from './service/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Du-web';
  dialogData: any;
  dialogComponent: any;
  constructor(
    private dialogService: DialogService,
    private router: Router,
    private scrollToTopService: ScrollToService,
    private el: ElementRef,
    private renderer: Renderer2,
    private metaTagsService: MetaTagsService,
    private titleService: TitleService
  ) {
    this.dialogService.dialogData$.subscribe((data) => {
      this.dialogData = data;
      this.dialogComponent = data ? data.component : null;
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTopService.scrollToTop();
        const myElement = this.el.nativeElement.querySelector('#top');
        myElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        console.log('Triggered action via Renderer2!');
      });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const myElement = this.el.nativeElement.querySelector('#top');
        this.renderer.setStyle(myElement, 'background-color', 'lightblue');
        console.log('Triggered action via Renderer2!');
        this.scrollToTopService.scrollToTop();
      });
  }
  ngOnInit(): void {
    this.titleService.setPageTitle('Design Unity');

    // Set meta tags
    this.metaTagsService.setDescription(
      'This is an example of an Angular application.'
    );
    this.metaTagsService.setKeywords('Angular, SEO, Meta Tags');
    this.metaTagsService.setMetaTags([
      { name: 'author', content: 'John Doe' },
      { name: 'robots', content: 'index, follow' },
    ]);

    // Set Open Graph (OG) meta tags
    this.metaTagsService.setOgTags([
      { property: 'og:title', content: 'My Angular App' },
      {
        property: 'og:description',
        content: 'This is an example of an Angular application.',
      },
      { property: 'og:image', content: 'https://example.com/image.jpg' },
    ]);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTop();
      });
  }
  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
