import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-khuyenmai',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './khuyenmai.html',
  styleUrls: ['./khuyenmai.css']
})
export class KhuyenMaiComponent {
  vouchers = [
    { code: 'DH3YHZXB', percent: 30 },
    { code: 'KM45GHTR', percent: 20 },
    { code: 'GIA50OFF', percent: 50 },
    { code: 'SALE10X', percent: 10 },
    { code: 'KMFAIR99', percent: 25 },
    { code: 'KMHAPPY', percent: 15 }
  ];
}
