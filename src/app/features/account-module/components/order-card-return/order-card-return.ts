import { Component } from '@angular/core';
import { OrderItem } from '../order-item/order-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-card-return',
  imports: [OrderItem, CommonModule],
  templateUrl: './order-card-return.html',
  styleUrl: './order-card-return.css',
})
export class OrderCardReturn {

}
