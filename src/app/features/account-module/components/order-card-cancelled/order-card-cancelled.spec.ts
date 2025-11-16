import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardCancelled } from './order-card-cancelled';

describe('OrderCardCancelled', () => {
  let component: OrderCardCancelled;
  let fixture: ComponentFixture<OrderCardCancelled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardCancelled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardCancelled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
