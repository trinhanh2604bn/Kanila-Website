import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overlay-preference1',
  templateUrl: './overlay-preference1.html',
  styleUrls: ['./overlay-preference1.css'],
})
export class OverlayPreference1Component {
  constructor(private router: Router) {}

  isOverlayVisible: boolean = true; // Mặc định overlay hiển thị

  closeOverlay() {
    this.isOverlayVisible = false;
  }

  nextPage() {
    this.router.navigate(['/overlay-preference2']);
    console.log('Chuyển sang trang tiếp theo');
  }
}
