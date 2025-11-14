import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-item.html',
  styleUrl: './order-item.css',
})
export class OrderItem {
  @Input() image = 'assets/sample-product.png';
  @Input() brand = 'Tên Thương Hiệu';
  @Input() name = 'Tên sản phẩm';
  @Input() quantity = 1;
  @Input() price = 200_000;
}
