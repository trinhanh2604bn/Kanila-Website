import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  imports: [],
  templateUrl: './divider.html',
  styleUrl: './divider.css',
})
export class Divider {
[x: string]: any;
  @Input() title: string = 'SẢN PHẨM MỚI';   // Thay đổi cụm "SẢN PHẨM MỚI"
  @Input() buttonText: string = 'Xem tất cả';
}
