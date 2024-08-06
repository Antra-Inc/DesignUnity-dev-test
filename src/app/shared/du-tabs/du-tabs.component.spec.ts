import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuTabsComponent } from './du-tabs.component';

describe('DuTabsComponent', () => {
  let component: DuTabsComponent;
  let fixture: ComponentFixture<DuTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
