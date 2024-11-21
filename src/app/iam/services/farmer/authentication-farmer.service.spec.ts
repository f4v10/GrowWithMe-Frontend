import { TestBed } from '@angular/core/testing';

import { AuthenticationFarmerService } from './authentication-farmer.service';

describe('AuthenticationFarmerService', () => {
  let service: AuthenticationFarmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationFarmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
