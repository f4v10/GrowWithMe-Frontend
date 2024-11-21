import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantSignInComponent } from './signin.component';

describe('SignInComponent', () => {
  let component: ConsultantSignInComponent;
  let fixture: ComponentFixture<ConsultantSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantSignInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
