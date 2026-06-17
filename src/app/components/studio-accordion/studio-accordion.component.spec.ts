import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioAccordionComponent } from './studio-accordion.component';

describe('StudioAccordionComponent', () => {
  let component: StudioAccordionComponent;
  let fixture: ComponentFixture<StudioAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudioAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
