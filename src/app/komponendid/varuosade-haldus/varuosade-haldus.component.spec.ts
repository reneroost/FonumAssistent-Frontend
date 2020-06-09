import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaruosadeHaldusComponent } from './varuosade-haldus.component';

describe('VaruosadeHaldusComponent', () => {
  let component: VaruosadeHaldusComponent;
  let fixture: ComponentFixture<VaruosadeHaldusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaruosadeHaldusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaruosadeHaldusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
