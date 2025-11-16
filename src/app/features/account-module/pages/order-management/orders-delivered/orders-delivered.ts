import { Component } from '@angular/core';
import { OrderCard } from '../../../components/order-card/order-card';
import { OrderItem } from '../../../components/order-item/order-item';
import { OrderCardDelivery } from "../../../components/order-card-delivery/order-card-delivery";

@Component({
  selector: 'app-orders-delivered',
  imports: [OrderCardDelivery],
  templateUrl: './orders-delivered.html',
  styleUrl: './orders-delivered.css',
})
export class OrdersDelivered {

}
