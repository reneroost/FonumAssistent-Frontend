import { TestBed } from '@angular/core/testing';

import { YksikVaartusedService } from './yksik-vaartused.service';

describe('YksikVaartusedService', () => {
  let service: YksikVaartusedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YksikVaartusedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
