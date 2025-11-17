import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCard} from '../../../components/order-card/order-card';


@Component({
  standalone: true,
  selector: 'app-orders-processing',
  imports: [CommonModule, OrderCard],
  templateUrl: './orders-processing.html',
  styleUrls: ['../orders-status.css']
})
export class OrdersProcessing {
}
