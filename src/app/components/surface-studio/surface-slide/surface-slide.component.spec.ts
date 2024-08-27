import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceSlideComponent } from './surface-slide.component';

describe('SurfaceSlideComponent', () => {
  let component: SurfaceSlideComponent;
  let fixture: ComponentFixture<SurfaceSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfaceSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfaceSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
