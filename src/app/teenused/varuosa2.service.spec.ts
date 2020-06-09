import { TestBed } from '@angular/core/testing';

import { Varuosa2Service } from './varuosa2.service';

describe('Varuosa2Service', () => {
  let service: Varuosa2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Varuosa2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
