import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,                // nếu project bạn đang dùng standalone
  imports: [CommonModule],         // để dùng *ngIf, *ngFor...
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  // điều khiển hiện/ẩn mockup liên kết ngân hàng
  showBankMockup = false;
}
