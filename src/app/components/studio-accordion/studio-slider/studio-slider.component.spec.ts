import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioSliderComponent } from './studio-slider.component';

describe('StudioSliderComponent', () => {
  let component: StudioSliderComponent;
  let fixture: ComponentFixture<StudioSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
