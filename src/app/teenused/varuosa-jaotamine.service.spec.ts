import { TestBed } from '@angular/core/testing';

import { VaruosaJaotamineService } from './varuosa-jaotamine.service';

describe('VaruosaJaotamineService', () => {
  let service: VaruosaJaotamineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaruosaJaotamineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
