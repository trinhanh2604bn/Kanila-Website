import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.html',
  styleUrls: ['./community.css']
})
export class CommunityComponent implements OnInit {

  activeTab: 'posts' | 'users' = 'posts';

  currentPage = 1;
  totalPages = 7;

  ngOnInit(): void {}

  switchTab(tab: 'posts' | 'users') {
    this.activeTab = tab;
    this.currentPage = 1;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
