import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  constructor(private titleService: Title, private metaService: Meta) {}
    // Set page title
    setTitle(title: string): void {
      this.titleService.setTitle(title);
    }
  
    // Set meta tag
    setMetaTag(name: string, content: string): void {
      this.metaService.updateTag({ name: name, content: content });
    }
  
    // Set Open Graph (OG) meta tag
    setOgTag(property: string, content: string): void {
      this.metaService.updateTag({ property: property, content: content });
    }
  
    // Set multiple meta tags at once
    setMetaTags(metaTags: { name: string, content: string }[]): void {
      metaTags.forEach(tag => {
        this.metaService.updateTag({ name: tag.name, content: tag.content });
      });
    }
  
    // Set multiple OG meta tags at once
    setOgTags(ogTags: { property: string, content: string }[]): void {
      ogTags.forEach(tag => {
        this.metaService.updateTag({ property: tag.property, content: tag.content });
      });
    }
  
    // Set the description meta tag
    setDescription(description: string): void {
      this.setMetaTag('description', description);
    }
  
    // Set keywords meta tag
    setKeywords(keywords: string): void {
      this.setMetaTag('keywords', keywords);
    }
}
