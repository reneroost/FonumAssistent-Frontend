import { TestBed } from '@angular/core/testing';

import { TehtudTooLogiService } from './tehtud-too-logi.service';

describe('TehtudTooLogiService', () => {
  let service: TehtudTooLogiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TehtudTooLogiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
