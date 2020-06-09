import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalehtComponent } from './avaleht.component';

describe('AvalehtComponent', () => {
  let component: AvalehtComponent;
  let fixture: ComponentFixture<AvalehtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalehtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalehtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
