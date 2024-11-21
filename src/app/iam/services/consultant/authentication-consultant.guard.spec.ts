import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authenticationConsultantGuard } from './authentication-consultant.guard';

describe('authenticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authenticationConsultantGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
