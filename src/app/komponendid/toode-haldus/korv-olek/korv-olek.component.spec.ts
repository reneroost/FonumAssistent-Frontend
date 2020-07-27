import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorvOlekComponent } from './korv-olek.component';

describe('KorvOlekComponent', () => {
  let component: KorvOlekComponent;
  let fixture: ComponentFixture<KorvOlekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorvOlekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorvOlekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
