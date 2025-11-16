import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bfslider',
  imports: [],
  templateUrl: './bfslider.html',
  styleUrl: './bfslider.css',
})
export class Bfslider implements OnInit {

 csliderValue: number = 50; // Khởi tạo giá trị mặc định của slider là 50%

  constructor() { }

  ngOnInit(): void {}

  // Hàm cập nhật width của divisor khi slider thay đổi
  moveDivisor(event: Event): void {
    const slider = event.target as HTMLInputElement;
    this.csliderValue = Number(slider.value);
  }

}
