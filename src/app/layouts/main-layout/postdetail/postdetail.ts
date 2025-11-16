import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postdetail.html',
  styleUrl: './postdetail.css',
})
export class Postdetail {
  // id bài hiện tại (MainLayout truyền vào)
  @Input() detailId = 1;

  // quay lại list
  @Output() back = new EventEmitter<void>();

  // mở 1 bài khác trong “Blog khác”
  @Output() openOther = new EventEmitter<number>();

  goBack() {
    this.back.emit();
  }

  openOtherDetail(id: number) {
    this.openOther.emit(id);
  }
}
