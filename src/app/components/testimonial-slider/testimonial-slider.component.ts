import { Component, OnInit } from '@angular/core';

interface CarouselItem {
  text: string;
  stars: number;
  name: string;
}

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss']
})
export class TestimonialSliderComponent {
  boxes: CarouselItem[] = [
    { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", stars: 5, name: "Kigo Dentals 1" },
    { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", stars: 4, name: "Kigo Dentals 2" },
    { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", stars: 5, name: "Kigo Dentals 3" },
    { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", stars: 4, name: "Kigo Dentals 4" },
    // { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", stars: 5, name: "Kigo Dentals 5" },
    // { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", stars: 4, name: "Kigo Dentals 6" }
  ];
  activeIndex = 0;

  ngOnInit(): void {
    // Initialize the carousel
    this.updateClasses();
  }

  getBoxClass(index: number): string {
    if (index === this.activeIndex) {
      return 'box active';
    } else if (index === (this.activeIndex + 1) % this.boxes.length) {
      return 'box next';
    } else if (index === (this.activeIndex - 1 + this.boxes.length) % this.boxes.length) {
      return 'box prev';
    } else {
      return 'box';
    }
  }

  getStars(stars: number): number[] {
    return Array(stars).fill(0);
  }

  getEmptyStars(stars: number): number[] {
    return Array(5 - stars).fill(0);
  }

  updateClasses(): void {
    // Trigger change detection to update classes
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.boxes.length;
    this.updateClasses();
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.boxes.length) % this.boxes.length;
    this.updateClasses();
  }
}







