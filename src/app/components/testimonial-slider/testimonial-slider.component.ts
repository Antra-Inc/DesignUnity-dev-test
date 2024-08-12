import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss']
})
export class TestimonialSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLUListElement>;

  cards = [
    {
      img: '../../../assets/img/testimonials/user.png',
      name: 'Balance Person 1',
      title: 'Sales Manager',
      stars: 5,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      bgColor: '#756b86'
    },
    {
      img: '../../../assets/img/testimonials/user.png',
      name: 'Person 2',
      title: 'Sales Manager',
      stars: 4,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      bgColor: '#7ea862'
    },
    {
      img: '../../../assets/img/testimonials/user.png',
      name: 'Balance Person dfdss 3',
      title: 'Sales Manager',
      stars: 3,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      bgColor: '#9b7d75'
    },
    {
      img: '../../../assets/img/testimonials/user.png',
      name: 'Balance 4',
      title: 'Sales Manager',
      stars:4,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      bgColor: '#a5a6aa'
    },
    {
      img: '../../../assets/img/testimonials/user.png',
      name: 'Balance Person 5',
      title: 'Sales Manager',
      stars: 5,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      bgColor: '#67a47b'
    }
  ];

  isDragging = false;
  startX = 0;
  startScrollLeft = 0;
  firstCardWidth = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeCarousel();
    this.carousel.nativeElement.addEventListener('scroll', () => {
      this.setVisibleClasses();
      this.infiniteScroll();
    });
    this.setVisibleClasses();
  }

  initializeCarousel() {
    const cardElement = this.carousel.nativeElement.querySelector('.card') as HTMLElement;
    this.firstCardWidth = cardElement?.offsetWidth ?? 0;
    const cardPerView = Math.round(this.carousel.nativeElement.offsetWidth / this.firstCardWidth);
    const carouselChildren = Array.from(this.carousel.nativeElement.children);

    carouselChildren.slice(-cardPerView).reverse().forEach(card => {
      this.carousel.nativeElement.insertAdjacentHTML('afterbegin', (card as HTMLElement).outerHTML);
    });

    carouselChildren.slice(0, cardPerView).forEach(card => {
      this.carousel.nativeElement.insertAdjacentHTML('beforeend', (card as HTMLElement).outerHTML);
    });
  }

  scroll(direction: 'left' | 'right') {
    const scrollAmount = this.firstCardWidth;
    const newScrollPosition = this.carousel.nativeElement.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    this.carousel.nativeElement.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
  }
  

  infiniteScroll() {
    const maxScrollLeft = this.carousel.nativeElement.scrollWidth - this.carousel.nativeElement.offsetWidth;
    if (this.carousel.nativeElement.scrollLeft === 0) {
      this.carousel.nativeElement.classList.add('no-transition');
      this.carousel.nativeElement.scrollLeft = maxScrollLeft - this.firstCardWidth;
      this.carousel.nativeElement.classList.remove('no-transition');
    } else if (Math.ceil(this.carousel.nativeElement.scrollLeft) >= maxScrollLeft) {
      this.carousel.nativeElement.classList.add('no-transition');
      this.carousel.nativeElement.scrollLeft = this.firstCardWidth;
      this.carousel.nativeElement.classList.remove('no-transition');
    }
    this.setVisibleClasses();
  }


  
  setVisibleClasses() {
    const cards = Array.from(this.carousel.nativeElement.querySelectorAll('.card')) as HTMLElement[];
    const carouselRect = this.carousel.nativeElement.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
  
    let minDistance = Infinity;
    let activeIndex = -1;
  
    // Identify the card closest to the center of the carousel
    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(carouselCenter - cardCenter);
  
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });
  
    // Clear all classes first
    cards.forEach(card => {
      card.classList.remove('prev', 'active', 'next');
    });
  
    if (activeIndex !== -1) {
      // Apply active class to the closest card
      cards[activeIndex].classList.add('active');
  
      // Apply prev class to the card before the active one
      if (activeIndex > 0) {
        cards[activeIndex - 1].classList.add('prev');
      } else {
        cards[cards.length - 1].classList.add('prev');
      }
  
      // Apply next class to the card after the active one
      if (activeIndex < cards.length - 1) {
        cards[activeIndex + 1].classList.add('next');
      } else {
        cards[0].classList.add('next');
      }
    }
  }
  
  





}
