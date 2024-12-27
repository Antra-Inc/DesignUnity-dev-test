import { Component, OnInit, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MetaTagsService } from 'src/app/service/meta-tags.service';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private meta: Meta,
    private titleService: TitleService,
    private metaTagsService: MetaTagsService
  ) {
    this.meta.addTag({ name: 'title', content: 'My Page Title' });
  }
  ngOnInit(): void {
    this.titleService.setPageTitle('Design Unity');

    // Set meta tags
    this.metaTagsService.setDescription(
      'Thinking of painting walls? Elevate your surfaces with Venetian Lime plasters from Design Unity. Luxury wall & floor finishes | Imported brands | Explore now'
    );
    this.metaTagsService.setKeywords('Design Unity');
    this.metaTagsService.setMetaTags([
      { name: 'Design Unity', content: 'Design Unity' },
      { name: 'Design Unity', content: 'Design Unity' },
    ]);

    // Set Open Graph (OG) meta tags
    this.metaTagsService.setOgTags([
      { property: 'og:title', content: 'Design Unity' },
      {
        property: 'og:description',
        content: 'This is an example of an Angular application.',
      },
      { property: 'og:image', content: '' },
    ]);
  }
  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
