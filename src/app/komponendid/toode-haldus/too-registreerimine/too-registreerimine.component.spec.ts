import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooRegistreerimineComponent } from './too-registreerimine.component';

describe('TooRegistreerimineComponent', () => {
  let component: TooRegistreerimineComponent;
  let fixture: ComponentFixture<TooRegistreerimineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooRegistreerimineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooRegistreerimineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
