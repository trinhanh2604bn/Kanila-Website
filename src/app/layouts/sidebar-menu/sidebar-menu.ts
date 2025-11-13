import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Nhập khẩu CommonModule nếu cần

@Component({
  selector: 'app-sidebar-menu',  // Chắc chắn rằng selector là 'app-sidebar-menu'
  standalone: true,  // Đánh dấu SidebarMenu là standalone component
  imports: [CommonModule],  // Nhập khẩu CommonModule nếu cần
  templateUrl: './sidebar-menu.html',
  styleUrls: ['./sidebar-menu.css']
})
export class SidebarMenu {
  // Logic của component SidebarMenu
}
