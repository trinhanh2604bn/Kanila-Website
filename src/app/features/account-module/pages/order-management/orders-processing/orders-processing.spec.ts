import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersProcessing } from './orders-processing';

describe('OrdersProcessing', () => {
  let component: OrdersProcessing;
  let fixture: ComponentFixture<OrdersProcessing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersProcessing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersProcessing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
