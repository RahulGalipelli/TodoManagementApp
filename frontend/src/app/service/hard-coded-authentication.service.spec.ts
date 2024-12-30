import { TestBed } from '@angular/core/testing';

import { HardCodedAuthenticationService } from './hard-coded-authentication.service';

describe('HardCodedAuthenticationService', () => {
  let service: HardCodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
