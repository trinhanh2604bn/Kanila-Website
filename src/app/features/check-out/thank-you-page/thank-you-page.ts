import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you-page',
  imports: [],
  templateUrl: './thank-you-page.html',
  styleUrl: './thank-you-page.css',
})
export class ThankYouPage {
  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['detail']);
  }
}
