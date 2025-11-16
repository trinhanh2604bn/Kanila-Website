// src/app/layouts/main-layout/main-layout.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Post } from './post/post';
import { Postdetail } from './postdetail/postdetail';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, Header, Footer, Post, Postdetail],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  // false = đang ở danh sách blog
  // true  = đang ở trang chi tiết
  showPostDetail = false;
  currentDetailId = 1;

  // Khi bấm Đọc thêm / Blog khác
  openPostDetail(id: number) {
    this.currentDetailId = id;
    this.showPostDetail = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Nút quay lại danh sách
  backToList() {
    this.showPostDetail = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
