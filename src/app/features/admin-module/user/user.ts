import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  username: string;
  middle: string;
  first: string;   // vẫn giữ nhưng không hiển thị
  gender: string;
  dob: string;
  phone: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {

  activeTab: string = 'admin';


  users: User[] = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    username: `admin${i + 1}`,
    middle: "Nguyễn Văn",
    first: `A${i + 1}`,
    gender: i % 2 === 0 ? "Nam" : "Nữ",
    dob: "01/01/2000",
    phone: "090000000" + i,
    email: `admin${i + 1}@mail.com`,
    address: "Địa chỉ"
  }));


  customers: User[] = Array.from({ length: 10 }).map((_, i) => ({
    id: 101 + i,
    username: `user${i + 1}`,
    middle: "Trần Thị",
    first: `B${i + 1}`,
    gender: i % 2 === 0 ? "Nam" : "Nữ",
    dob: `0${i + 1}/01/200${i}`,
    phone: "08888888",
    email: `user${i + 1}@mail.com`,
    address: "Địa chỉ"
  }));

  // ==================================
  // CHO CẢ 2 TAB
  // ==================================
  selectedUser: User | null = null;
  selectedCustomer: User | null = null;

  showEditForm = false;
  showCustomerForm = false;

  // Không được chuyển tab khi đang sửa
  isEditing() {
    return this.showEditForm || this.showCustomerForm;
  }

  // Chuyển tab nhưng phải check
  switchTab(tab: string) {
    if (this.isEditing()) {
      alert("Bạn phải lưu hoặc hủy chỉnh sửa trước khi chuyển tab.");
      return;
    }
    this.activeTab = tab;
    this.clearSelections();
  }

  clearSelections() {
    this.selectedUser = null;
    this.selectedCustomer = null;
    this.showEditForm = false;
    this.showCustomerForm = false;
  }

  // ==================================
  // QUẢN LÝ
  // ==================================
  selectUser(u: User) {
    if (this.showCustomerForm) return;
    this.selectedUser = { ...u };
    this.showEditForm = false;
  }

  editUser() {
    if (this.selectedUser) this.showEditForm = true;
  }

  saveUser() {
    if (!this.selectedUser) return;
    const index = this.users.findIndex(x => x.id === this.selectedUser!.id);
    this.users[index] = { ...this.selectedUser! };

    alert("Lưu thành công!");
    this.showEditForm = false;
    this.selectedUser = null;
  }

  deleteUser() {
    if (!this.selectedUser) return;
    this.users = this.users.filter(x => x.id !== this.selectedUser!.id);
    this.clearSelections();
  }

  // ==================================
  // KHÁCH HÀNG
  // ==================================
  selectCustomer(c: User) {
    if (this.showEditForm) return;
    this.selectedCustomer = { ...c };
    this.showCustomerForm = false;
  }

  openCustomerForm() {
    if (this.selectedCustomer) this.showCustomerForm = true;
  }

  saveCustomer() {
    if (!this.selectedCustomer) return;

    const index = this.customers.findIndex(x => x.id === this.selectedCustomer!.id);
    this.customers[index] = { ...this.selectedCustomer! };

    alert("Lưu thành công!");
    this.showCustomerForm = false;
    this.selectedCustomer = null;
  }

  deleteCustomer() {
    if (!this.selectedCustomer) return;
    this.customers = this.customers.filter(x => x.id !== this.selectedCustomer!.id);
    this.clearSelections();
  }
}
