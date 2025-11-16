import { Component } from '@angular/core';
import { OrderItem } from '../order-item/order-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-card-delivery',
  imports: [OrderItem, CommonModule],
  templateUrl: './order-card-delivery.html',
  styleUrl: './order-card-delivery.css',
})
export class OrderCardDelivery {

}
