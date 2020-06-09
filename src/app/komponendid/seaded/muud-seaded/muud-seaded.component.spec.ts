import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudSeadedComponent } from './muud-seaded.component';

describe('MuudSeadedComponent', () => {
  let component: MuudSeadedComponent;
  let fixture: ComponentFixture<MuudSeadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuudSeadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuudSeadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
