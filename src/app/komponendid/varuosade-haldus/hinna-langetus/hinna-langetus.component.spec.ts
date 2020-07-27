import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinnaLangetusComponent } from './hinna-langetus.component';

describe('HinnaLangetusComponent', () => {
  let component: HinnaLangetusComponent;
  let fixture: ComponentFixture<HinnaLangetusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinnaLangetusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinnaLangetusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
