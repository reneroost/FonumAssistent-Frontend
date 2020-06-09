import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaruosadeKuvamine2Component } from './varuosade-kuvamine2.component';

describe('VaruosadeKuvamine2Component', () => {
  let component: VaruosadeKuvamine2Component;
  let fixture: ComponentFixture<VaruosadeKuvamine2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaruosadeKuvamine2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaruosadeKuvamine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
