import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorvDetailidComponent } from './korv-detailid.component';

describe('KorvDetailidComponent', () => {
  let component: KorvDetailidComponent;
  let fixture: ComponentFixture<KorvDetailidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorvDetailidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorvDetailidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
