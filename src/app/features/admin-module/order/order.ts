import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.html',
  styleUrls: ['./order.css']
})
export class OrderComponent {

  statusList = [
    "Đã hủy",
    "Chưa gửi",
    "Đang chuẩn bị",
    "Đã gửi",
    "Đơn hàng mới",
    "Đã được xác nhận"
  ];

  filterId = "";
  filterName = "";
  filterStatus = "";

  itemsPerPage = 10;
  currentPage = 1;

  // Fake data
  orders = Array.from({ length: 80 }, (_, i) => ({
    id: 12345 + i,
    name: "Tên sản phẩm",
    status: this.statusList[i % this.statusList.length],
    category: "Phân loại",
    channel: "Social",
    orderCode: 123 + i,
    customerId: 500 + i
  }));

  statusClass(status: string) {
    return {
      "Đã hủy": "st-cancel",
      "Chưa gửi": "st-pending",
      "Đang chuẩn bị": "st-preparing",
      "Đã gửi": "st-success",
      "Đơn hàng mới": "st-new",
      "Đã được xác nhận": "st-confirm"
    }[status];
  }

  // Lọc
  get filteredOrders() {
    return this.orders.filter(o => {
      const byId = !this.filterId || o.id.toString().includes(this.filterId);
      const byName = !this.filterName || o.name.toLowerCase().includes(this.filterName.toLowerCase());
      const byStatus = !this.filterStatus || o.status === this.filterStatus;
      return byId && byName && byStatus;
    });
  }

  // Tổng số trang
  get totalPages() {
    return Math.ceil(this.filteredOrders.length / this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Data phân trang
  get paginatedOrders() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredOrders.slice(start, start + this.itemsPerPage);
  }

  // Chuyển trang
  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
}
