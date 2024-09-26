import { TestBed } from '@angular/core/testing';

import { ConsultantUserService } from './consultant-user.service';

describe('ConsultantUserService', () => {
  let service: ConsultantUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultantUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
