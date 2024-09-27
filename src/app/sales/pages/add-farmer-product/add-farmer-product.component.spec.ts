import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmerProductComponent } from './add-farmer-product.component';

describe('AddFarmerProductComponent', () => {
  let component: AddFarmerProductComponent;
  let fixture: ComponentFixture<AddFarmerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFarmerProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFarmerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
