import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overlay-preference3',
  imports: [],
  templateUrl: './overlay-preference3.html',
  styleUrl: './overlay-preference3.css',
})
export class OverlayPreference3 {
  constructor(private router: Router) {}

  isOverlayVisible: boolean = true;
  closeOverlay() {
    this.isOverlayVisible = false;
  }

  goToBeauty() {
    this.router.navigate(['beauty-preference']);
    console.log('Chuyển sang page Làn Da Của Bạn');
  }

  goToHomepage() {
    this.router.navigate([' ']);
    console.log('Quay về Homepage');
  }
}
