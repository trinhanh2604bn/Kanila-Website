import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCancelled } from './orders-cancelled';

describe('OrdersCancelled', () => {
  let component: OrdersCancelled;
  let fixture: ComponentFixture<OrdersCancelled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersCancelled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersCancelled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
