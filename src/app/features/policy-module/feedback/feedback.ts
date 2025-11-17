import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

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
  imports: [CommonModule, FormsModule], 
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.css']
})
export class Feedback{
  
  formData: FeedbackData = {
    type: 'feedback', 
    name: '',
    email: '',
    subject: '',
    description: '',
    file: null
  };

  subjectOptions = [
    'Chọn chủ đề',
    'Chất lượng sản phẩm',
    'Dịch vụ khách hàng',
    'Quy trình giao hàng',
    'Website / Ứng dụng',
    'Khác'
  ];

  submitForm(): void {
    console.log('Gửi phản hồi:', this.formData);
    alert('Cảm ơn bạn đã gửi phản hồi!');
  }
}