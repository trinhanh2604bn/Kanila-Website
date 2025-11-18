import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../product/service/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-product-slider',
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './product-slider.html',
  standalone: true,
  styleUrl: './product-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductSlider implements OnInit {
  products: any[] = [];
  currentPage: number = 1; // Trang hiện tại
  itemsPerPage: number = 5; // Số lượng sản phẩm hiển thị mỗi trang

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Lấy sản phẩm từ service
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  // Hàm phân trang
  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    return this.products.slice(start, end);
  }

  // Điều hướng trang
  goToPage(page: number) {
    this.currentPage = page;
  }
}
