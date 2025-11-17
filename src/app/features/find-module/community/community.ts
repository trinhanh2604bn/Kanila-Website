// // src/app/features/find-module/community/community.ts

// import { Component, OnInit } from '@angular/core'; 

// @Component({
//   selector: 'app-community',
//   templateUrl: './community.html',
//   styleUrls: ['./community.css']
// })
// export class Community implements OnInit { 
    
//     // --- BIẾN CHO TABS (Bài đăng/Người dùng) ---
//     activeTab: 'posts' | 'users' = 'posts'; 
    
//     // --- BIẾN CHO PHÂN TRANG (PAGINATION) ---
//     currentPage: number = 1;
//     totalPages: number = 7; // Giữ lại biến này để nút 'Sau' biết khi nào nên disable
    
//     constructor() { }

//     ngOnInit(): void {
//         // Khởi tạo trạng thái ban đầu khi component được tạo
//     }

//     // --- HÀM XỬ LÝ TABS ---
//     switchTab(tab: 'posts' | 'users'): void {
//         this.activeTab = tab;
//         this.currentPage = 1; 
//         console.log(`Chuyển sang tab: ${tab}`);
//     }

//     // --- HÀM XỬ LÝ PHÂN TRANG ---
    
//     prevPage(): void {
//         if (this.currentPage > 1) {
//             this.goToPage(this.currentPage - 1);
//         }
//     }
    
//     // Hàm này chỉ nhận số
//     goToPage(page: number): void {
//         // Chỉ xử lý nếu trang nằm trong giới hạn
//         if (page >= 1 && page <= this.totalPages) {
//             this.currentPage = page;
//             console.log(`Đã chuyển đến trang ${page}`);
//             // Ở đây bạn sẽ thực hiện fetch data mới
//         }
//     }
    
//     nextPage(): void {
//         if (this.currentPage < this.totalPages) {
//             this.goToPage(this.currentPage + 1);
//         }
//     }
// }



// src/app/features/find-module/community/community.ts

import { Component, OnInit } from '@angular/core'; 
// Đảm bảo import OnInit từ core

@Component({
  selector: 'app-community',
  templateUrl: './community.html',
  styleUrls: ['./community.css']
})
export class Community implements OnInit { 
    
    // --- BIẾN CHO TABS (Sử dụng activeTab để điều khiển *ngIf) ---
    activeTab: 'posts' | 'users' = 'posts'; 
    
    // --- BIẾN CHO PHÂN TRANG (PAGINATION) ---
    currentPage: number = 1;
    totalPages: number = 7; 
    
    constructor() { }

    ngOnInit(): void {
        // Thực hiện các khởi tạo
    }

    // --- HÀM XỬ LÝ TABS ---
    switchTab(tab: 'posts' | 'users'): void {
        // Áp dụng logic chuyển tab tương tự ví dụ của bạn
        this.activeTab = tab;
        this.currentPage = 1; // Reset trang khi chuyển tab
        console.log(`Chuyển sang tab: ${tab}`);
    }

    // --- HÀM XỬ LÝ PHÂN TRANG ---
    
    prevPage(): void {
        if (this.currentPage > 1) {
            this.goToPage(this.currentPage - 1);
        }
    }
    
    goToPage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            console.log(`Đã chuyển đến trang ${page}`);
        }
    }
    
    nextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.goToPage(this.currentPage + 1);
        }
    }
}