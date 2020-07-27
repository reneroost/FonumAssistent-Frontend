import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnimkulunudVaruosadComponent } from './enimkulunud-varuosad.component';

describe('EnimkulunudVaruosadComponent', () => {
  let component: EnimkulunudVaruosadComponent;
  let fixture: ComponentFixture<EnimkulunudVaruosadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnimkulunudVaruosadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnimkulunudVaruosadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
