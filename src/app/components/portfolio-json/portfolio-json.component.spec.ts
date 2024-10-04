import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioJsonComponent } from './portfolio-json.component';

describe('PortfolioJsonComponent', () => {
  let component: PortfolioJsonComponent;
  let fixture: ComponentFixture<PortfolioJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
