import { Component } from '@angular/core';
import { OrderItem } from '../order-item/order-item';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card-return',
  imports: [OrderItem, CommonModule],
  templateUrl: './order-card-return.html',
  styleUrl: './order-card-return.css',
})
export class OrderCardReturn {
  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['account/returndetail']);
  }
}
