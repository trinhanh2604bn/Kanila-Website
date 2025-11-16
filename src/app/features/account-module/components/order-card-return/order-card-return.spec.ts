import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardReturn } from './order-card-return';

describe('OrderCardReturn', () => {
  let component: OrderCardReturn;
  let fixture: ComponentFixture<OrderCardReturn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardReturn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardReturn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
