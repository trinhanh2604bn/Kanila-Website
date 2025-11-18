import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postdetail.html',
  styleUrl: './postdetail.css',
})
export class Postdetail {

  // @Input() detailId = 1;


  // @Output() back = new EventEmitter<void>();


  // @Output() openOther = new EventEmitter<number>();

  // goBack() {
  //   this.back.emit();
  // }

  // openOtherDetail(id: number) {
  //   this.openOther.emit(id);
  // }

  constructor(private router: Router) {}
  goBlog() {this.router.navigate(['blog'])}
}
