import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: FarmerSignupComponent;
  let fixture: ComponentFixture<FarmerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
