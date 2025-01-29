import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsThankYouComponent } from './rewards-thank-you.component';

describe('RewardsThankYouComponent', () => {
  let component: RewardsThankYouComponent;
  let fixture: ComponentFixture<RewardsThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsThankYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardsThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
