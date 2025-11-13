import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Nhập khẩu CommonModule nếu cần

@Component({
  selector: 'app-points',  // Chắc chắn rằng selector là 'app-points'
  standalone: true,  // Đánh dấu Points là standalone component
  imports: [CommonModule],  // Nhập khẩu CommonModule nếu cần
  templateUrl: './points.html',
  styleUrls: ['./points.css']
})
export class Points {
  // Logic của component Points
}
