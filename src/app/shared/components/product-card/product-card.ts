import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../features/product/service/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() brand = '';
  @Input() name = '';
  @Input() price: number = 0;
  @Input() image = '';
  @Input() description = '';
  @Input() stock: number = 0;
  @Input() bought: number = 0;
  @Input() rating = 0;
  @Input() productId = '';

  hover = false;
  wishlist = false;
  showPreview = false;

  // Dữ liệu sản phẩm sẽ được lấy từ API qua service
  product: any;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    // Nếu không có dữ liệu đầu vào qua @Input(), chúng ta sẽ gọi API để lấy dữ liệu.
    if (!this.name) {
      this.fetchProductData();
    }
  }


fetchProductData() {
    const productSlug = this.name.toLowerCase().replace(/\s+/g, '-');
    this.productService.getProductBySlug(productSlug).subscribe(
      (data: any) => { // SỬ DỤNG 'any' ĐỂ ĐƠN GIẢN HÓA VÀ KHẮC PHỤC LỖI TS(2411)
        this.product = data;  // Lưu dữ liệu vào biến `product`
        this.brand = data.brand || '';
        this.name = data.productName || '';
        this.price = data.price || 0;
        this.image = data.imageUrl || '';
        this.description = data.description || '';
        this.stock = data.stock || 0;
        this.bought = data.bought || 0;
        this.rating = data.averageRating || 0;
      },
      (error: any) => {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      }
    );
  }

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

    const identifier = this.productId;

    if (identifier) {
        this.router.navigate(['/product/detail/id', identifier]);
    } else {
        console.error('Không tìm thấy Product ID để điều hướng.');
        // Nếu không có ID, bạn có thể fallback bằng slug từ tên sản phẩm
        const slug = this.name.toLowerCase().replace(/\s+/g, '-');
        this.router.navigate(['/product/detail', slug]);
    }
  }
}