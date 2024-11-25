import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-studio-dialog',
  templateUrl: './studio-dialog.component.html',
  styleUrls: ['./studio-dialog.component.scss'],
})
export class StudioDialogComponent implements OnInit {
  currentIndex: number = 0;
  slides!: any;
  images!: any;
  @Input() newInputData!: any;
  constructor(private http: HttpClient) {}
  public getJSON(): Observable<any> {
    return this.http.get('./assets/surface-studio.json');
  }
  ngOnInit(): void {
    console.log('input', this.newInputData?.data?.itemId);
    this.getImages();
  }

  getImages() {
    if (this.newInputData?.data?.itemId) {
      this.getJSON().subscribe(
        (data: any) => {
          console.log('Fetched data:', data);

          switch (this.newInputData.data.itemId) {
            case 'Hyderabad':
              this.slides = data.Hyderabad;
              break;
            case 'Bangalore':
              this.slides = data.Bangalore;
              break;
            case 'Mumbai':
              this.slides = data.Delhi;
              break;
            default:
              this.slides = data.Hyderabad;
              break;
          }
          console.log('Fetched data:', this.slides);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }
  isCurrentSlideIndex(index: number) {
    console.log('Clicked on slide', index, this.currentIndex);
    return this.currentIndex === index;
   
  }
  prevSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? ++this.currentIndex : 0;
  }
  nextSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? --this.currentIndex : this.slides.length - 1;
    // this.scrollToActive();
  }
  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
    console.log('Clicked on slide', index, this.currentIndex);
  }
}
