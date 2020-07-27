import { TestBed } from '@angular/core/testing';

import { VaruosadEnimkulunudService } from './varuosad-enimkulunud.service';

describe('VaruosadEnimkulunudService', () => {
  let service: VaruosadEnimkulunudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaruosadEnimkulunudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
