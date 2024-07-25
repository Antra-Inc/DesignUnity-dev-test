import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuDialogComponent } from './du-dialog.component';

describe('DuDialogComponent', () => {
  let component: DuDialogComponent;
  let fixture: ComponentFixture<DuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
