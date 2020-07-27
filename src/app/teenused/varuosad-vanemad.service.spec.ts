import { TestBed } from '@angular/core/testing';

import { VaruosadVanemadService } from './varuosad-vanemad.service';

describe('VaruosadVanemadService', () => {
  let service: VaruosadVanemadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaruosadVanemadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
