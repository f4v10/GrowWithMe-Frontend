import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantSignUpComponent } from './signup.component';

describe('SignUpComponent', () => {
  let component: ConsultantSignUpComponent;
  let fixture: ComponentFixture<ConsultantSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
