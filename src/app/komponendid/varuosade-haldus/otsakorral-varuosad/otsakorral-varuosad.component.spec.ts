import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtsakorralVaruosadComponent } from './otsakorral-varuosad.component';

describe('OtsakorralVaruosadComponent', () => {
  let component: OtsakorralVaruosadComponent;
  let fixture: ComponentFixture<OtsakorralVaruosadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtsakorralVaruosadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtsakorralVaruosadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
