import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tonkho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tonkho.html',
  styleUrls: ['./tonkho.css']
})
export class TonKhoComponent {

  products = Array.from({ length: 30 }, (_, i) => ({
    id: 10000 + i,
    name: `Sản phẩm ${i + 1}`,
    category: 'Phân loại',
    importPrice: '110.000đ',
    stock: i % 2 === 0 ? 120 : 0,
    warehouse: 123,
    status: i % 2 === 0 ? 'Còn hàng' : 'Hết hàng'
  }));


  filterId: string = "";
  filterName: string = "";
  filterStatus: string = "";


  itemsPerPage = 10;
  currentPage = 1;


  get filteredData() {
    return this.products.filter(item => {
      const matchId = this.filterId === "" || item.id.toString().includes(this.filterId);
      const matchName = this.filterName === "" || item.name.toLowerCase().includes(this.filterName.toLowerCase());
      const matchStatus = this.filterStatus === "" || item.status === this.filterStatus;
      return matchId && matchName && matchStatus;
    });
  }

  /** PAGINATED DATA */
  get pagedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredData.slice(start, start + this.itemsPerPage);
  }

  /** TOTAL PAGES */
  get totalPages() {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  /** ARRAY FOR PAGE NUMBER DISPLAY */
  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  /** PAGINATION FUNCTIONS */
  goToPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  goToFirstPage() {
    this.currentPage = 1;
  }

  goToLastPage() {
    this.currentPage = this.totalPages;
  }
}
