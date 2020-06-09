import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsindusedComponent } from './esindused.component';

describe('EsindusedComponent', () => {
  let component: EsindusedComponent;
  let fixture: ComponentFixture<EsindusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsindusedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsindusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
