import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Notification } from '../../pages/authentication/authentication';
import { AuthService } from '../../../../core/services/auth';

@Component({
  // ==========================================================
  // ▼▼▼ LỖI NẰM Ở ĐÂY: THÊM DÒNG 'selector' NÀY VÀO ▼▼▼
  // ==========================================================
  selector: 'app-signup',

  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html', // (Giả sử tên file của bạn là signup.html)
  styleUrl: './signup.css', // (Giả sử tên file của bạn là signup.css)
})
export class SignUp implements OnInit {
  @Input() notification: Notification | null = null;
  @Output() clientError = new EventEmitter<Notification>();
  @Output() submitSignup = new EventEmitter<any>();
  @Output() navigateToLogin = new EventEmitter<void>();

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // Xóa confirmPassword theo yêu cầu trước
    });
  }

  ngOnInit(): void {}

  // Khi bấm nút "Đăng Ký"
  onSubmit(): void {
    if (this.signupForm.invalid) {
      // 2. Nếu lỗi form cục bộ, emit lỗi lên Cha
      this.clientError.emit({
        type: 'error',
        message: 'Đăng ký lỗi! Vui lòng điền đầy đủ thông tin.',
      });
      return;
    }

    // Gửi dữ liệu lên Cha (authentication.ts)
    this.submitSignup.emit(this.signupForm.value);
  }

  // Khi bấm "Quay lại trang đăng nhập"
  onLoginClick(): void {
    this.navigateToLogin.emit();
  }
}
