import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodeHaldusComponent } from './toode-haldus.component';

describe('ToodeHaldusComponent', () => {
  let component: ToodeHaldusComponent;
  let fixture: ComponentFixture<ToodeHaldusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToodeHaldusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToodeHaldusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
