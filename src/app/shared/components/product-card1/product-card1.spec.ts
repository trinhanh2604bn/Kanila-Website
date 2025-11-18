import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard1 } from './product-card1';

describe('ProductCard1', () => {
  let component: ProductCard1;
  let fixture: ComponentFixture<ProductCard1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCard1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
