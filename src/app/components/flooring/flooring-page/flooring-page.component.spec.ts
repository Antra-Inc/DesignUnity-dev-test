import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringPageComponent } from './flooring-page.component';

describe('FlooringPageComponent', () => {
  let component: FlooringPageComponent;
  let fixture: ComponentFixture<FlooringPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooringPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlooringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
