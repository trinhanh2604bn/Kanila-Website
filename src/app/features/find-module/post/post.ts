// src/app/layouts/main-layout/post/post.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  // @Output() readMore = new EventEmitter<number>();

  constructor(private router: Router) {}
  goDetail() {this.router.navigate(['postdetail/:id'])}
}
