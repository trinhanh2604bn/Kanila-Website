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
   goCategory(){this.router.navigate(['category']);}
   goMainpage(){this.router.navigate(['mainpage']);}
   goBrand(){this.router.navigate(['brand-list']);}
   goWishlist(){this.router.navigate(['/account/wishlist']);}
   goCart(){this.router.navigate(['/cart']);}
   goAccount(){this.router.navigate(['/account']);}
}
