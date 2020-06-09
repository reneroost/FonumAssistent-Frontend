import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YmberJaotamineComponent } from './ymber-jaotamine.component';

describe('YmberJaotamineComponent', () => {
  let component: YmberJaotamineComponent;
  let fixture: ComponentFixture<YmberJaotamineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YmberJaotamineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YmberJaotamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
