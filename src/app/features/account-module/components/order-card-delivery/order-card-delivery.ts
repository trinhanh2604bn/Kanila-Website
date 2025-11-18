import { Component } from '@angular/core';
import { OrderItem } from '../order-item/order-item';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card-delivery',
  imports: [OrderItem, CommonModule],
  templateUrl: './order-card-delivery.html',
  styleUrl: './order-card-delivery.css',
})
export class OrderCardDelivery {
  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['account/returnrequest']);
  }
  
 goProductdetail(){this.router.navigate(['detail/:slug']);}
}
