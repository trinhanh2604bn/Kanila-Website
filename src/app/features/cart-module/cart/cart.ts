import { Component } from '@angular/core';
import { ItemCart } from "../item-cart/item-cart";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [ItemCart, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
// Biến trạng thái để kiểm soát việc hiển thị khối hóa đơn
    showOrderRight: boolean = false;



    /**
     * Hàm được gọi khi trạng thái checkbox thay đổi
     * @param event Đối tượng sự kiện
     */
    toggleOrderRight(event: any) {
        // Cập nhật trạng thái hiển thị dựa trên trạng thái checked của checkbox
        this.showOrderRight = event.target.checked;
    }

      constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['checkout']);
  }
}
