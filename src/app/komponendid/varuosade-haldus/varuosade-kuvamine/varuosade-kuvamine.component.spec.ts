import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaruosadeKuvamineComponent } from './varuosade-kuvamine.component';

describe('VaruosadeKuvamineComponent', () => {
  let component: VaruosadeKuvamineComponent;
  let fixture: ComponentFixture<VaruosadeKuvamineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaruosadeKuvamineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaruosadeKuvamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
