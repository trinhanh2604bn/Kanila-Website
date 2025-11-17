import { Component } from '@angular/core';
import { OrderItem } from "../../account-module/components/order-item/order-item";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-order',
  imports: [OrderItem, CommonModule],
  templateUrl: './detail-order.html',
  styleUrl: './detail-order.css',
})
export class DetailOrder {
  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['account/ordershell/processing']);
  }
  goToCancelled() {
    this.router.navigate(['account/ordershell/cancelled']);
  }
}
