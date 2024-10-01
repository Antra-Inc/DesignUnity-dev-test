import { Component } from '@angular/core';

@Component({
  selector: 'app-thumbnail-preview',
  templateUrl: './thumbnail-preview.component.html',
  styleUrls: ['./thumbnail-preview.component.scss']
})
export class ThumbnailPreviewComponent {

    images = [
      { src: '../../../assets/img/portfolio/luxury/large-size/Blueberry-Farms-64.jpg' },
      { src: '../../../assets/img/portfolio/luxury/large-size/Blueberry-Farms-64.jpg' },
      // More images
    ];
    selectedImage: string | null = null;
  
    getThumbnailUrl(src: string): string {
      // Modify URL to request a smaller size for thumbnails
      return `${src}?w=150&h=150`;
    }
  
    getPreviewUrl(src: string): string {
      // Modify URL to request a larger size for preview
      return `${src}?w=800&h=600`;
    }
  
    showPreview(src: string): void {
      this.selectedImage = src;
    }
  

}
