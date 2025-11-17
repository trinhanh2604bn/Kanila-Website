import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPolicy } from './payment-policy';

describe('PaymentPolicy', () => {
  let component: PaymentPolicy;
  let fixture: ComponentFixture<PaymentPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
