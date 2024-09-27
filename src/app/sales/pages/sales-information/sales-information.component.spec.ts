import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInformationComponent } from './sales-information.component';

describe('SalesInformationComponent', () => {
  let component: SalesInformationComponent;
  let fixture: ComponentFixture<SalesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
