import { Component } from '@angular/core';
import { OrderCard } from '../../../components/order-card/order-card';
import { OrderCardCancelled } from "../../../components/order-card-cancelled/order-card-cancelled";

@Component({
  selector: 'app-orders-cancelled',
  imports: [OrderCardCancelled],
  templateUrl: './orders-cancelled.html',
  styleUrl: './orders-cancelled.css',
})
export class OrdersCancelled {

}
