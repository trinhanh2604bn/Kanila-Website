import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FilterItem {
  title: string;
  type: 'checkbox' | 'price' | 'text';
  open: boolean;
  options?: string[];
  active?: boolean;
}

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html',
  styleUrls: ['./category-filter.css'],
})
export class CategoryFilterComponent {
  private readonly DESKTOP_BREAKPOINT = 768;
  isExpanded: boolean = true;
  constructor() {
    this.setInitialExpansionState();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setInitialExpansionState();
  }

  setInitialExpansionState() {
    if (typeof window !== 'undefined' && window.innerWidth > this.DESKTOP_BREAKPOINT) {
      this.isExpanded = true;
    } else if (typeof window !== 'undefined' && window.innerWidth <= this.DESKTOP_BREAKPOINT) {
    }
  }

  priceOptions = ['Dưới 150.000đ', '150.000đ - 500.000đ', '500.000đ - 1.000.000đ'];

  filters: FilterItem[] = [
    {
      title: 'Theo Làn Da Bạn',
      type: 'checkbox',
      open: false,
      active: false,
      options: ['Loại Da', 'Màu Da', 'Màu Mắt', 'Nguyên Liệu', 'Thương Hiệu'],
    },
    {
      title: 'Thương Hiệu',
      type: 'checkbox',
      open: false,
      active: false,
      options: [
        'Ami Cole',
        'Armani Beauty',
        'ABH',
        'Basma',
        'Beautyblender',
        'Bobbi Brown',
        'Charlotte Tilbury',
        'Clinique',
        'Dior',
        'Fenty Beauty',
        'Freck Beauty',
        'Givenchy',
        'Glossier',
        'Grande Cosmetics',
        'Gucci',
        'Guerlain',
        'Haus Labs',
        'Hourglass',
        'IT Cosmetics',
        'Kosas',
        'Kulfi',
        'Lancôme',
        'Make Up For Ever',
        'Makeup By Mario',
        'Melt Cosmetics',
        'Merit',
        'Milk Makeup',
        'Nars',
        'Natasha Denona',
        'Pat McGrath Labs',
        'Patrick Ta',
        'Shiseido',
        'Shu Uemura',
        'Sulwhasoo',
        'Tarte',
        'Too Faced',
        'Tower 28 Beauty',
        'Yves Saint Laurent',
      ],
    },
    {
      title: 'Loại Da',
      type: 'checkbox',
      open: false,
      active: false,
      options: ['Thường', 'Dầu', 'Khô', 'Hỗn hợp'],
    },
    {
      title: 'Khoảng Giá',
      type: 'price',
      open: false,
      active: false,
    },
  ];

  /** ⭐ Toggle từng mục filter */
  toggle(item: FilterItem) {
    item.open = !item.open;
    item.active = item.open;
  }

  toggleFilter() {
    this.isExpanded = !this.isExpanded;
  }
}
