import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerProductInformationComponent } from './farmer-product-information.component';

describe('FarmerProductInformationComponent', () => {
  let component: FarmerProductInformationComponent;
  let fixture: ComponentFixture<FarmerProductInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerProductInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerProductInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
