import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaruosaLisamineComponent } from './varuosa-lisamine.component';

describe('VaruosaLisamineComponent', () => {
  let component: VaruosaLisamineComponent;
  let fixture: ComponentFixture<VaruosaLisamineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaruosaLisamineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaruosaLisamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
