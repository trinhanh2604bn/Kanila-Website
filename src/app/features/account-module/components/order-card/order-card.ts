import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OrderItem } from '../order-item/order-item';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, OrderItem],
  templateUrl: './order-card.html',
  styleUrl: './order-card.css',
})
export class OrderCard {
  @Input() items: OrderItemData[] = [];
  @Input() total = 0;
  @Input() orderCode = 'DH0001';
}

export interface OrderItemData {
  image: string;
  brand: string;
  name: string;
  quantity: number;
  price: number;
}
