import { Component } from '@angular/core';
import { OrderItem } from '../order-item/order-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-card-cancelled',
  imports: [OrderItem, CommonModule],
  templateUrl: './order-card-cancelled.html',
  styleUrl: './order-card-cancelled.css',
})
export class OrderCardCancelled {

}
