import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private titleService: Title) {}

  // Set the page title
  setPageTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  // Prepend the page title with a custom prefix (useful for consistent branding)
  setPageTitleWithPrefix(prefix: string, title: string): void {
    this.titleService.setTitle(`${prefix} - ${title}`);
  }
}
