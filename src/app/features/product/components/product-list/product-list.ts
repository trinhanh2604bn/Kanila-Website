import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product';
import { CommonModule } from '@angular/common';
import { CategoryFilterComponent } from '../../../../shared/components/category-filter/category-filter';




@Component({
  selector: 'app-product-list',
  imports: [SharedModule,ProductCardComponent, CommonModule, CategoryFilterComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  providers: [ProductService]
})
export class ProductList implements OnInit {
[x: string]: any;
 products: Product[] = [];  // Mảng chứa sản phẩm
  allProducts: Product[] = [];  // Tất cả sản phẩm để lọc
selectedBrands: string[] = [];



  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Gọi API để lấy tất cả sản phẩm
    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data;
      this.products = this.randomizeProducts(this.allProducts);
    });
  }

  randomizeProducts(products: Product[]): Product[] {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 60);  // Chỉ lấy 30 sản phẩm ngẫu nhiên
  }

  // Hàm gọi khi người dùng chọn checkbox
  onFilterChange(selectedFilters: string[]) {
    // Random lại sản phẩm mỗi khi thao tác
    this.products = this.randomizeProducts(this.allProducts);
    window.scrollTo(0, 0);
  }

}
// export class ProductList implements OnInit {
//   products: Product[] = [];
//   allProducts: Product[] = [];  // Danh sách tất cả sản phẩm

//   constructor(private productService: ProductService) {}

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe((data) => {
//       this.allProducts = data;
//       this.products = this.randomizeProducts(this.allProducts);  // Lấy 30 sản phẩm ngẫu nhiên ban đầu
//     });
//   }

//   // Hàm random lại 30 sản phẩm
//   randomizeProducts(products: Product[]): Product[] {
//     const shuffled = [...products].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, 30);  // Chỉ lấy 30 sản phẩm ngẫu nhiên
//   }

//   // Hàm lọc lại sản phẩm dựa trên các lựa chọn filter
//   onFilterChange(selectedFilters: string[]): void {
//     this.products = this.randomizeProducts(this.allProducts);

//     // Lọc theo các lựa chọn
//     if (selectedFilters.length > 0) {
//       this.products = this.products.filter(product =>
//         selectedFilters.some(filter => product.brandId === filter)  // Ví dụ lọc theo thương hiệu
//       );
//     }

    // Scroll lên đầu trang khi filter thay đổi


