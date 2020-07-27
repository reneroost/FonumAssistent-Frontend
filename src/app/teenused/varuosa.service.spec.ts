import { TestBed } from '@angular/core/testing';

import { VaruosaService } from './varuosa.service';

describe('VaruosaService', () => {
  let service: VaruosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaruosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
