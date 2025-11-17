import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OrderItem } from '../order-item/order-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, OrderItem],
  templateUrl: './order-card.html',
  styleUrl: './order-card.css',
})
export class OrderCard {
    constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['detail']);
  }
}
