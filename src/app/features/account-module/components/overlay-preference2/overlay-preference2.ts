import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overlay-preference2',
  templateUrl: './overlay-preference2.html',
  styleUrl: './overlay-preference2.css',
})
export class OverlayPreference2 {
  constructor(private router: Router) {}

  isOverlayVisible: boolean = true;

  closeOverlay() {
    this.isOverlayVisible = false;
  }

  nextPage() {
    this.router.navigate(['/overlay-preference3']);
    console.log('Chuyển sang trang tiếp theo');
  }

  prevPage() {
    this.router.navigate(['/overlay-preference1']);
    console.log('Chuyển sang trang tiếp theo');
  }
}
