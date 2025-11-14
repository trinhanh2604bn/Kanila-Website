import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersReturn } from './orders-return';

describe('OrdersReturn', () => {
  let component: OrdersReturn;
  let fixture: ComponentFixture<OrdersReturn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersReturn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersReturn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
