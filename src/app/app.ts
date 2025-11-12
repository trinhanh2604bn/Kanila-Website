import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. SỬA TÊN IMPORT: Từ Header thành HeaderComponent
// SỬA: Thêm .component vào cuối đường dẫn
import { Header } from './core/header/header';
@Component({
  // 2. SỬA SELECTOR: Chỉ giữ lại app-root
  selector: 'app-root', 
  // 3. THÊM HeaderComponent VÀO IMPORTS
  imports: [RouterOutlet, Header], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Kanila');
}