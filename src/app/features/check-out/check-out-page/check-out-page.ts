import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out-page',
  imports: [],
  templateUrl: './check-out-page.html',
  styleUrl: './check-out-page.css',
})
export class CheckOutPage {
  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['thanks']);
  }
}
