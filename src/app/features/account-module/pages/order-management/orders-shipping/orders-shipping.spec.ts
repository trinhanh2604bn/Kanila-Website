import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersShipping } from './orders-shipping';

describe('OrdersShipping', () => {
  let component: OrdersShipping;
  let fixture: ComponentFixture<OrdersShipping>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersShipping]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersShipping);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
