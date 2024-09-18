import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioDialogComponent } from './studio-dialog.component';

describe('StudioDialogComponent', () => {
  let component: StudioDialogComponent;
  let fixture: ComponentFixture<StudioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
