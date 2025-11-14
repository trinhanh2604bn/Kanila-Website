import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagementShell } from './order-management-shell';

describe('OrderManagementShell', () => {
  let component: OrderManagementShell;
  let fixture: ComponentFixture<OrderManagementShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderManagementShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderManagementShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
