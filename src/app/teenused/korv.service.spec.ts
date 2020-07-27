import { TestBed } from '@angular/core/testing';

import { KorvService } from './korv.service';

describe('KorvService', () => {
  let service: KorvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KorvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
