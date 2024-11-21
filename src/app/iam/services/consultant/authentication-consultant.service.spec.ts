import { TestBed } from '@angular/core/testing';

import { AuthenticationConsultantService } from './authentication-consultant.service';

describe('AuthenticationService', () => {
  let service: AuthenticationConsultantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationConsultantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
