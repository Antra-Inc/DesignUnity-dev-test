import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuCarouselComponent } from './du-carousel.component';

describe('DuCarouselComponent', () => {
  let component: DuCarouselComponent;
  let fixture: ComponentFixture<DuCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
