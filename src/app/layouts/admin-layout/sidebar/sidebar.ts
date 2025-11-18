import { Component, Input } from '@angular/core'; // THÊM Input
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  
  // KHAI BÁO @Input() ĐỂ NHẬN DỮ LIỆU TỪ ADMIN LAYOUT (Khắc phục lỗi NG8002)
  @Input() isCollapsed: boolean = false; 
  
  // Bạn có thể thêm @Output() toggle = new EventEmitter<void>(); nếu cần nút toggle
}

