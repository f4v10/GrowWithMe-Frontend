import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: FarmerLoginComponent;
  let fixture: ComponentFixture<FarmerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerLoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FarmerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
