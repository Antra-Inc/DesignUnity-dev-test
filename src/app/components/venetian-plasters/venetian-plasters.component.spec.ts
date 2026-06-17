import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenetianPlastersComponent } from './venetian-plasters.component';

describe('VenetianPlastersComponent', () => {
  let component: VenetianPlastersComponent;
  let fixture: ComponentFixture<VenetianPlastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenetianPlastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenetianPlastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
