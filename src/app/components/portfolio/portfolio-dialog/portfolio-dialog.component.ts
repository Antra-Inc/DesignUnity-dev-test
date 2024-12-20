import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DIALOG_DATA } from 'src/app/service/dialog.service';

@Component({
  selector: 'portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['./portfolio-dialog.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-out', style('*')),
          ]),
          query(':leave', [
            animate('0.5s ease-out', style({ transform: 'translateX(-100%)' })),
          ]),
        ]),
      ]),
      transition(':decrement', [
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-out', style('*')),
          ]),
          query(':leave', [
            animate('0.5s ease-out', style({ transform: 'translateX(100%)' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class PortfolioDialogComponent
  implements AfterViewInit, OnInit, OnDestroy
{
  @Input() newInputData!: any;
  @Input() message!: any;
  currentIndex = 0;
  slides!: any;
  counter = 0;
  intervalId: any;
  constructor(private cdr: ChangeDetectorRef) {}
  @ViewChild('listContainer') listContainer!: ElementRef;
  doalogTitle!: string;
  imageFrom!: string;
  dialogDescription!: string;
  @HostListener('document:keydown', ['$event'])
  ngOnInit(): void {
    console.log('message', this.message, this.newInputData);

    this.startAutoClick();
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  ngAfterViewInit(): void {
    this.newInputData;
    console.log(
      'this.newInputData',
      this.newInputData,
      this.newInputData?.data?.itemId?.SubData
    );
    this.slides = this.newInputData?.data?.itemId[0];
    this.cdr.detectChanges();
    console.log('slides', this.slides.length);
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.slides = this.newInputData?.data?.itemId?.SubData;
  //   console.log('slides', this.slides);
  // }
  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }
  prevSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? ++this.currentIndex : 0;
  }
  startAutoClick() {
    this.intervalId = setInterval(() => {
      // this.prevSlide();
    }, 2000);
  }
  nextSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? --this.currentIndex : this.slides.length - 1;
    this.scrollToActive();
  }
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.prevSlide();
    } else if (event.key === 'ArrowLeft') {
      this.nextSlide();
    }
    // Add additional conditions for other keys as needed
  }
  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }
  scrollToActive() {
    const container = this.listContainer.nativeElement;
    const activeItem = container.children[this.currentIndex];
    const offset =
      activeItem.offsetLeft -
      container.offsetWidth / 2 +
      activeItem.offsetWidth / 2;
    container.scrollTo({
      left: offset,
      behavior: 'smooth',
    });
  }
}
