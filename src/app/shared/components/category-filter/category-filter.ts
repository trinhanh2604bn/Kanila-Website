import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from '../../../features/product/components/product-list/product-list';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html',
  styleUrls: ['./category-filter.css'],
})
export class CategoryFilterComponent {
  priceOptions = ['Dưới 150.000đ', '150.000đ - 500.000đ', '500.000đ - 1.000.000đ'];

  filters: any[] = [
    {
      title: 'Theo Làn Da Bạn',
      type: 'checkbox',
      open: false,
      options: ['Loại Da', 'Mụn Da', 'Màu Mắt', 'Nguyên Liệu', 'Thương Hiệu'],
    },
    {
      title: 'Thương Hiệu',
      type: 'checkbox',
      open: false,
      options: ['Ami Cole', 'Armani Beauty', 'ABH', 'Basma', 'Beautyblender'],
    },
    {
      title: 'Loại Da',
      type: 'checkbox',
      open: false,
      options: ['Thường', 'Dầu', 'Khô', 'Hỗn hợp'],
    },
    {
      title: 'Khoảng Giá',
      type: 'price',
      open: false,
    },
  ];

  selectedFilters: string[] = [];  // Lưu trữ các filter đã chọn

  constructor(private productList: ProductList) {}

  toggle(item: any) {
    item.open = !item.open;
    item.active = item.open;
  }

  // Hàm gọi khi người dùng thay đổi filter
  onFilterChange(item: any, option: string) {
    if (item.type === 'checkbox') {
      const isSelected = this.selectedFilters.includes(option);
      if (isSelected) {
        this.selectedFilters = this.selectedFilters.filter(filter => filter !== option);
      } else {
        this.selectedFilters.push(option);
      }
    }

    if (item.type === 'price') {
          if (!this.selectedFilters.includes(option)) {
      this.selectedFilters.push(option);
    }
  }

    // Cập nhật lại sản phẩm khi thay đổi bộ lọc
    this.productList.onFilterChange(this.selectedFilters);
    this.productList.onFilterChange(this.selectedFilters);
  }

  // Định nghĩa hàm applyPriceFilter bên trong class
  applyPriceFilter() {
    console.log('Price filter applied');
    this.productList.onFilterChange(this.selectedFilters); // Lọc lại sản phẩm khi áp dụng bộ lọc
  }



}