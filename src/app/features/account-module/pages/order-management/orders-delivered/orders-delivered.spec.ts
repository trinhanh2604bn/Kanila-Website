import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDelivered } from './orders-delivered';

describe('OrdersDelivered', () => {
  let component: OrdersDelivered;
  let fixture: ComponentFixture<OrdersDelivered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersDelivered]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersDelivered);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
