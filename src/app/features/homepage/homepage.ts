import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Đảm bảo rằng CommonModule đã được nhập khẩu

@Component({
  selector: 'app-homepage',
  standalone: true,  // Đánh dấu Homepage là standalone component
  imports: [CommonModule],  // Nhập khẩu CommonModule
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class Homepage {
  menuVisible: boolean = false;  // Biến điều khiển hiển thị menu

  toggleMenu() {
    this.menuVisible = !this.menuVisible;  // Đảo ngược trạng thái của menu khi nhấn hamburger
  }
}
