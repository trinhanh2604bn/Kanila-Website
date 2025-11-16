// src/app/layouts/main-layout/post/post.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  @Output() readMore = new EventEmitter<number>();

  onReadMore(id: number) {
    this.readMore.emit(id);
  }
}
