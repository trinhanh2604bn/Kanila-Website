import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-panel',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './collapse-panel.html',
  styleUrl: './collapse-panel.css',
})
export class CollapsePanel {

  @Input() startOpen = true;

  isOpen = true;

  ngOnInit() {
    this.isOpen = this.startOpen;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
