import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardDelivery } from './order-card-delivery';

describe('OrderCardDelivery', () => {
  let component: OrderCardDelivery;
  let fixture: ComponentFixture<OrderCardDelivery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardDelivery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardDelivery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
