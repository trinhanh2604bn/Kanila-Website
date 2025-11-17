import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-request',
  imports: [],
  templateUrl: './return-request.html',
  styleUrl: './return-request.css',
})
export class ReturnRequest {
  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['account/returndetail']);
  }
}
