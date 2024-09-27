import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantSignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: ConsultantSignupComponent;
  let fixture: ComponentFixture<ConsultantSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
