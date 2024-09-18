import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceStudioComponent } from './surface-studio.component';

describe('StudioAccordionComponent', () => {
  let component: SurfaceStudioComponent;
  let fixture: ComponentFixture<SurfaceStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfaceStudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfaceStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
