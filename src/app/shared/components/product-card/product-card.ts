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

  // fetchProductData() {
    // Đây là ví dụ về cách gọi API để lấy dữ liệu sản phẩm theo ID hoặc slug.
    // Bạn có thể thay đổi URL hoặc cách lấy dữ liệu tùy thuộc vào API của bạn.
//     const productSlug = this.name.toLowerCase().replace(/\s+/g, '-');
//     this.productService.getProductBySlug(productSlug).subscribe(
//       (data: {
//         [x: string]: string; brand: string; productName: string; price: number; imageUrl: string; description: string; stock: number; bought: number; averageRating: number;
// }) => {
//         this.product = data;  // Lưu dữ liệu vào biến `product`
//         this.brand = data.brand || '';
//         this.name = data.productName || '';
//         this.price = data.price || 0;
//         this.image = data.imageUrl || '';
//         this.description = data.description || '';
//         this.stock = data.stock || 0;
//         this.bought = data.bought || 0;
//         this.rating = data.averageRating || 0;

//       },
//       (error: any) => {
//         console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
//       }
//     );
//   }

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

  // goToDetail(e: MouseEvent) {
  //   e.stopPropagation();
  //   const slug = this.name.toLowerCase().replace(/\s+/g, '-');
  //   this.router.navigate(['/product-detail', slug]);
  // }

  // openProductDetail(e: MouseEvent) {
  //   e.stopPropagation();
  //   console.log('Đi đến trang chi tiết sản phẩm...');
  // }
  // product-card.ts

// ... (các phần khác)

// openProductDetail(e: MouseEvent) {
//     e.stopPropagation();
//     // Giữ lại nếu bạn muốn dùng code thay vì routerLink trong overlay-link
//     const slug = this.name.toLowerCase().replace(/\s+/g, '-');
//     this.router.navigate(['/product/detail', slug]);

    // goToDetail(e: MouseEvent) {
    // e.stopPropagation();

    // Nếu bạn có ID, hãy sử dụng nó thay vì slug
    // const identifier = this.productId || this.name.toLowerCase().replace(/\s+/g, '-');

    // Điều hướng: /product/detail/ID-MANG-TÍNH-ĐỊNH-DANH
    // this.router.navigate(['/product/detail/id', identifier]);
//   }
// }
  goToDetail(e: MouseEvent) {
    // 1. NGĂN SỰ KIỆN NỔI BỌT (Rất quan trọng)
    e.stopPropagation();

    // 2. Lấy ID để điều hướng (productId là ID MongoDB)
    const identifier = this.productId;

    // 3. Điều hướng đến component ProductDetail với ID
    // Đường dẫn phải khớp với cấu hình router: /product/detail/:slug
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
