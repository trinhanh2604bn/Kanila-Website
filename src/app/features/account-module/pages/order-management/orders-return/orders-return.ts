import { Component } from '@angular/core';
import { OrderCard } from '../../../components/order-card/order-card';
import { OrderCardReturn } from '../../../components/order-card-return/order-card-return';

@Component({
  selector: 'app-orders-return',
  imports: [OrderCardReturn],
  templateUrl: './orders-return.html',
  styleUrl: './orders-return.css',
})
export class OrdersReturn {

}
