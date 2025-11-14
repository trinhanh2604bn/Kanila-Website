import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.html',
  styleUrls: ['./filter.css'],
})
export class FilterComponent {
  @Input() variant: 'default' | 'alphabet' = 'default';
  @Input() active: boolean = false;
  @Output() pressed = new EventEmitter<void>();

  onClick() {
    this.pressed.emit();
  }
}
