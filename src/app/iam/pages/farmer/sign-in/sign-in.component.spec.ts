import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: FarmerSignInComponent;
  let fixture: ComponentFixture<FarmerSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerSignInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
