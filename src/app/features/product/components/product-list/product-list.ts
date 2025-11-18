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