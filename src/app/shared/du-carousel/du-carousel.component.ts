import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
const animationCarouseltranslateX = [
  state('outright', style({ transform: `translateX(100%)`, opacity: 1 })),
  state('outleft', style({ transform: `translateX(-100%)` })),
  transition('void=>inleft', [style({ transform: `translateX(0)` })]),
  transition('void=>outleft', [style({ transform: `translateX(-100%)` })]),

  transition('*=>inright', [
    style({ transform: `translateX(-100%)` }),
    animate('1000ms ease-in-out', style({ transform: `translateX(0)` })),
  ]),
  transition('*=>inleft', [
    style({ transform: `translateX(100%)` }),
    animate('1000ms ease-in-out', style({ transform: `translateX(0)` })),
  ]),
  transition('*=>outleft', [
    style({ opacity: 1 }),
    animate('1000ms ease-in-out', style({ transform: `translateX(-100%)` })),
  ]),
  transition('*=>outright', [
    animate(
      '1000ms ease-in-out',
      style({ transform: `translateX(100%)`, opacity: 0 })
    ),
  ]),
];
const animationThumbail = [
  state('true', style({ transform: `translateX({{margin}})` }), {
    params: { margin: 0 },
  }),
  state('false', style({ transform: `translateX({{margin}})` }), {
    params: { margin: 0 },
  }),
  transition('true<=>false', [animate('500ms ease-in')]),
];
@Component({
  selector: 'du-carousel',
  templateUrl: './du-carousel.component.html',
  styleUrls: ['./du-carousel.component.scss'],
  animations: [
    trigger('animImageSlider', animationCarouseltranslateX),
    trigger('animationThumbail', animationThumbail),
  ],
})
export class DuCarouselComponent {
  @ViewChild('thumbail', { static: true }) thumbail!: ElementRef;
  @Input() set images(value) {
    this._images = value;
    this.slideControl = value.map((x: any, index: number) =>
      index ? 'outleft' : 'inleft'
    );
  }
  get images() {
    return this._images;
  }
  @Input() set images1(value) {
    this._images = value;
    this.slideControl = value.map((x: any, index: number) =>
      index ? 'outleft' : 'inleft'
    );
  }
  get images1() {
    return this._images;
  }
  @Input() nofooter!: boolean;
  @Input() height = 0;
  counter: number = 0;
  _images: any;
  slideControl!: any[];
  width: number = 0;
  counterThumb: number = 0;
  thumbailMargin: number = 0;
  thumbailMarginRigth: number = 2;
  thumbailWidth: number = 60;
  thumbailAnimation: boolean | null = null;
  right = 'right';
  resizeSub!: Subscription;
  posIni: any;
  private intervalId: number | null = null;
  constructor() {}

  ngOnInit() {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe((_) => this.posThumbail(this.counter));
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }
  move(pos: any) {
    const offset = this.posIni - pos;
    if (offset < -100) this.change('right');

    if (offset > 100) this.change('left');
  }

  change(direction: string) {
    const incr = direction == 'right' ? -1 : +1;
    const prev = this.counter;
    this.counter =
      (this.counter + this.images.length + incr) % this.images.length;
    this.onSlide(this.counter, prev, direction);
  }

  startAutoSlide(): void {
    this.intervalId = window.setInterval(() => {
      this.change('left');
    }, 3000);
  }
  setIndex(index: number) {
    if (index != this.counter) {
      const prev = this.counter;
      this.counter = index;
      const direction = prev > index ? 'right' : 'left';
      this.onSlide(this.counter, prev, direction);
    }
  }
  onLoad(el: any) {
    this.width = el.getBoundingClientRect().width;
  }

  onSlide(current: any, prev: any, direction: any) {
    this.slideControl[current] = 'in' + direction;
    this.slideControl[prev] = 'out' + direction;
    this.posThumbail(current);
  }
  onLoadThumbail() {
    this.counterThumb++;
    if (this.counterThumb == this.images.length) this.posThumbail(0);
  }
  posThumbail(current: number) {
    const width = this.thumbailWidth + this.thumbailMarginRigth;
    const widthWrapper =
      this.thumbail?.nativeElement.getBoundingClientRect().width;

    let newMargin: number = 0;
    if (widthWrapper > width * this.images.length)
      newMargin = (widthWrapper - width * this.images.length) / 2;
    else {
      const middle = widthWrapper / 2 - width * current;
      const min = widthWrapper - width * this.images.length;

      newMargin = Math.floor(middle > 0 ? 0 : middle < min ? min : middle);
    }
    if (newMargin != this.thumbailMargin) {
      this.thumbailMargin = newMargin;
      this.thumbailAnimation = !this.thumbailAnimation;
    }
  }
}
