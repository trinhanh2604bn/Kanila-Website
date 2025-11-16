import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCart } from './item-cart';

describe('ItemCart', () => {
  let component: ItemCart;
  let fixture: ComponentFixture<ItemCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
