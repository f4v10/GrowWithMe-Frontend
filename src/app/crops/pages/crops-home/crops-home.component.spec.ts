import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsHomeComponent } from './crops-home.component';

describe('CropsHomeComponent', () => {
  let component: CropsHomeComponent;
  let fixture: ComponentFixture<CropsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
