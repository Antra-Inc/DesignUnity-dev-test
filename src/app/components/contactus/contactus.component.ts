import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MetaTagsService } from 'src/app/service/meta-tags.service';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private titleService: TitleService,
    private metaTagsService: MetaTagsService
  ) {}
  ngOnInit(): void {
    this.titleService.setPageTitle(
      'Contact us to transform your walls and surfaces'
    );

    // Set meta tags
    this.metaTagsService.setDescription(
      `Get in touch with the experts- contact now: info@designunity.com | Call or whatsapp us: 8448448669 `
    );
    this.metaTagsService.setKeywords('');
  }
  selectedTab = 0;
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
  setActiveTab(index: number): void {
    this.selectedTab = index;
  }
}
