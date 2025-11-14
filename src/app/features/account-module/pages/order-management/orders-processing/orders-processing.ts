import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCard, OrderItemData } from '../../../components/order-card/order-card';


@Component({
  standalone: true,
  selector: 'app-orders-processing',
  imports: [CommonModule, OrderCard],
  templateUrl: './orders-processing.html',
  styleUrls: ['../orders-status.css']
})
export class OrdersProcessing {
  orders: { total: number; items: OrderItemData[] }[] = [
    {
      total: 600000,
      items: [
        {
          image: 'assets/sample-product.png',
          brand: 'Tên Thương Hiệu',
          name: 'Tên sản phẩm',
          quantity: 1,
          price: 200000
        },
        {
          image: 'assets/sample-product.png',
          brand: 'Tên Thương Hiệu',
          name: 'Tên sản phẩm',
          quantity: 1,
          price: 200000
        },
        {
          image: 'assets/sample-product.png',
          brand: 'Tên Thương Hiệu',
          name: 'Tên sản phẩm',
          quantity: 1,
          price: 200000
        }
      ]
    }
  ];
}
