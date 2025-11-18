import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  // trạng thái menu dropdown trên mobile
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  subscribe(ev: Event) {
    ev.preventDefault();
    alert('Cảm ơn bạn đã đăng ký!');
  }

   constructor(private router: Router) {}
   goProductList(){this.router.navigate(['productlist']);}
}
