import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  templateUrl: './filter.html',
  styleUrls: ['./filter.css'],
})
export class FilterComponent {
  /** Nhận trạng thái active từ component cha */
  @Input() active: boolean = false;

  /** Bắn event khi click */
  @Output() pressed = new EventEmitter<void>();

  onClick() {
    this.pressed.emit();
  }
}
