import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantHomeComponent } from './consultant-home.component';

describe('ConsultantHomeComponent', () => {
  let component: ConsultantHomeComponent;
  let fixture: ComponentFixture<ConsultantHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
