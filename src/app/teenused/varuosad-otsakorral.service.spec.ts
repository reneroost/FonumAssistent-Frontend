import { TestBed } from '@angular/core/testing';

import { VaruosadOtsakorralService } from './varuosad-otsakorral.service';

describe('VaruosadOtsakorralService', () => {
  let service: VaruosadOtsakorralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaruosadOtsakorralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
