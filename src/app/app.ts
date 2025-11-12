import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. SỬA TÊN IMPORT: Từ Header thành HeaderComponent
import { Header} from './core/header/header';  // Sửa đường dẫn
import { SidebarMenu} from './shared/sidebar-menu/sidebar-menu';

@Component({
  // 2. SỬA SELECTOR: Chỉ giữ lại app-root
  selector: 'app-root',
  // 3. THÊM HeaderComponent VÀO IMPORTS
  imports: [RouterOutlet, Header, SidebarMenu],  // Thêm HeaderComponent vào đây
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Sửa styleUrl thành styleUrls (vì styleUrls là mảng)
})
export class App {
  protected readonly title = signal('Kanila');
}
