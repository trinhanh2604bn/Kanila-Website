import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItem } from '../../components/order-item/order-item';

@Component({
  selector: 'app-return-request-detail',
  imports: [OrderItem,CommonModule],
  templateUrl: './return-request-detail.html',
  styleUrl: './return-request-detail.css',
})
export class ReturnRequestDetail {

}
