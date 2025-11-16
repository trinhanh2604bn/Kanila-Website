import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // BẮT BUỘC để sử dụng [(ngModel)]

// Định nghĩa Interface cho dữ liệu Form
interface FeedbackData {
  type: 'feedback' | 'complaint' | null;
  name: string;
  email: string;
  subject: string;
  description: string;
  file: File | null;
}

@Component({
  selector: 'app-feedback-complaint',
  standalone: true,
  // Cần thêm FormsModule vào imports
  imports: [CommonModule, FormsModule], 
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.css']
})
export class Feedback{
  
  // Dữ liệu form với giá trị mặc định
  formData: FeedbackData = {
    type: 'feedback', // Mặc định là Góp ý
    name: '',
    email: '',
    subject: '',
    description: '',
    file: null
  };

  // Các tùy chọn Subject
  subjectOptions = [
    'Chọn chủ đề',
    'Chất lượng sản phẩm',
    'Dịch vụ khách hàng',
    'Quy trình giao hàng',
    'Website / Ứng dụng',
    'Khác'
  ];

  // Logic gửi Form
  submitForm(): void {
    console.log('Gửi phản hồi:', this.formData);
    // Ở đây sẽ gọi Service để gửi dữ liệu lên server
    alert('Cảm ơn bạn đã gửi phản hồi!');
    // (Thêm logic reset form nếu cần)
  }
}