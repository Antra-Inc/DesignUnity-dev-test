import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallsCeilingsComponent } from './walls-ceilings.component';

describe('WallsCeilingsComponent', () => {
  let component: WallsCeilingsComponent;
  let fixture: ComponentFixture<WallsCeilingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallsCeilingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallsCeilingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
