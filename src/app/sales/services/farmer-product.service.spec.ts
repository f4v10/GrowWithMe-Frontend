import { TestBed } from '@angular/core/testing';

import { FarmerProductService } from './farmer-product.service';

describe('FarmerProductService', () => {
  let service: FarmerProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
