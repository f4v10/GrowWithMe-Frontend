import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmerComponentComponent } from './add-farmer.component.component';

describe('AddFarmerComponentComponent', () => {
  let component: AddFarmerComponentComponent;
  let fixture: ComponentFixture<AddFarmerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFarmerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFarmerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
