import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent {
  @Input() brand = '';
  @Input() name = '';
  @Input() price = '';
  @Input() image = '';
  @Input() description = '';
  @Input() stock: number = 0;
  @Input() bought = '';
  @Input() rating = 0;

  hover = false;
  wishlist = false;
  showPreview = false;

  constructor(private router: Router) {}

  get status(): string {
    return this.stock > 1 ? 'Còn hàng' : 'Hết hàng';
  }

  toggleWishlist(e: MouseEvent) {
    e.stopPropagation();
    this.wishlist = !this.wishlist;
  }

  openPreview(e: MouseEvent) {
    e.stopPropagation();
    this.showPreview = true;
  }

  closePreview() {
    this.showPreview = false;
  }

  goToDetail(e: MouseEvent) {
    e.stopPropagation();
    const slug = this.name.toLowerCase().replace(/\s+/g, '-'); // simple slug
    this.router.navigate(['/product-detail', slug]); // route ví dụ
  }

  openProductDetail(e: MouseEvent) {
    e.stopPropagation();
    // TODO: Chuyển sang trang chi tiết sản phẩm khi bạn tạo route
    console.log('Đi đến trang chi tiết sản phẩm...');
  }
}
