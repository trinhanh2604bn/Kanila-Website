import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ReviewPost {
  user: string;
  content: string;
  productName: string; 
  rating: number;      
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.html',
  styleUrls: ['./review.css']
})
export class ReviewComponent {
  posts: ReviewPost[] = [
    { 
      user: 'Bảo Nguyễn', 
      content: 'Sản phẩm rất mỏng nhẹ, không gây bí da. Rất đáng tiền, sẽ mua lại!',
      productName: 'Sản phẩm A',
      rating: 5
    },
    { 
      user: 'Ngọc Anh', 
      content: 'Chất son lì, giữ màu được khoảng 4-5 tiếng. Tuy nhiên, hơi khô môi một chút.',
      productName: 'Sản phẩm B',
      rating: 4
    },
    { 
      user: 'Hà My', 
      content: 'Giao hàng nhanh, đóng gói cẩn thận, sản phẩm nguyên vẹn.',
      productName: 'Sản phẩm C',
      rating: 5
    },
    { 
      user: 'Minh Hoàng', 
      content: 'Mùi hương tinh dầu quá nồng, tôi thích những sản phẩm có mùi nhẹ hơn.',
      productName: 'Sản phẩm D',
      rating: 3
    }
  ];
}