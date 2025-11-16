import { Component } from '@angular/core';
import { OrderCard } from '../../../components/order-card/order-card';
import { OrderItem } from '../../../components/order-item/order-item';

@Component({
  selector: 'app-orders-delivered',
  imports: [OrderCard],
  templateUrl: './orders-delivered.html',
  styleUrl: './orders-delivered.css',
})
export class OrdersDelivered {

}
