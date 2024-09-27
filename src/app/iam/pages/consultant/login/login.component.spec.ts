import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: ConsultantLoginComponent;
  let fixture: ComponentFixture<ConsultantLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
