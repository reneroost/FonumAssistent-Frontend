import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodeLogiComponent } from './toode-logi.component';

describe('ToodeLogiComponent', () => {
  let component: ToodeLogiComponent;
  let fixture: ComponentFixture<ToodeLogiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToodeLogiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToodeLogiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
