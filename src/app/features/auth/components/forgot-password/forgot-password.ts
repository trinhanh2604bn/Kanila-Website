import { Component, EventEmitter, Output, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription, interval } from 'rxjs'; // Import cho timer
import { Notification } from '../../pages/authentication/authentication';

function passwordsMatchValidator(form: FormGroup) {
  const newPassword = form.get('newPassword')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;

  // Chỉ báo lỗi nếu cả 2 ô đã được điền và không khớp
  if (newPassword && confirmPassword && newPassword !== confirmPassword) {
    // Trả về lỗi 'passwordsMismatch'
    return { passwordsMismatch: true };
  }
  // Nếu khớp hoặc chưa điền đủ thì không lỗi
  return null;
}

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword implements OnInit, OnDestroy {
  @Input() notification: Notification | null = null;
  @Output() clientError = new EventEmitter<Notification>();
  @Output() navigateToLogin = new EventEmitter<void>();

  emailForm: FormGroup;
  codeForm: FormGroup;
  resetForm: FormGroup; // <-- Form 3: Đổi mật khẩu

  currentView: 'enterEmail' | 'enterCode' | 'resetPassword' = 'enterEmail';
  sentEmail = '';

  countdown = 60;
  timerSubscription: Subscription | null = null;
  canResend = false;

  constructor(private fb: FormBuilder) {
    // Form 1: Nhập Email
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    // Form 2: Nhập Mã
    this.codeForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Form 3: Đổi Mật Khẩu
    this.resetForm = this.fb.group(
      {
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: passwordsMatchValidator }
    ); // <-- Thêm validator check khớp
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  // === XỬ LÝ FORM 1: BẤM NÚT "GỬI EMAIL" ===
  onEmailSubmit(): void {
    if (this.emailForm.invalid) {
      this.clientError.emit({
        type: 'error',
        message: 'Vui lòng nhập email hợp lệ.',
      });
      return;
    }
    console.log('Gửi mã tới:', this.emailForm.value.email);
    this.sentEmail = this.emailForm.value.email;

    // Chuyển sang View 2
    this.currentView = 'enterCode';
    this.startTimer();
  }

  onConfirmCode(): void {
    if (this.codeForm.invalid) {
      this.clientError.emit({
        type: 'error',
        message: 'Mã xác nhận không hợp lệ.',
      });
      return;
    }
    console.log('Xác nhận mã:', this.codeForm.value.code);

    // (Logic test: Giả sử mã đúng)

    // Chuyển sang View 3
    this.currentView = 'resetPassword';
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe(); // Dừng timer
    }
  }

  // === XỬ LÝ FORM 3: BẤM NÚT "ĐỔI MẬT KHẨU" ===
  onResetPasswordSubmit(): void {
    if (this.resetForm.invalid) {
      // Kiểm tra lỗi cụ thể
      if (this.resetForm.hasError('passwordsMismatch')) {
        this.clientError.emit({ type: 'error', message: 'Mật khẩu xác nhận không khớp!' });
      } else {
        this.clientError.emit({ type: 'error', message: 'Mật khẩu mới phải có ít nhất 6 ký tự.' });
      }
      return;
    }

    console.log('Mật khẩu mới đã được đặt!');
    alert('Đổi mật khẩu thành công!');
    this.onLoginClick(); // Quay về Đăng nhập
  }

  // === XỬ LÝ TIMER (giữ nguyên) ===
  startTimer(): void {
    this.canResend = false;
    this.countdown = 30;

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.timerSubscription = interval(1000).subscribe(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.canResend = true;
        if (this.timerSubscription) {
          this.timerSubscription.unsubscribe();
        }
      }
    });
  }
  onResendCode(): void {
    if (!this.canResend) return;
    console.log('Gửi lại mã tới:', this.sentEmail);
    alert('Đã gửi lại mã!');
    this.startTimer();
  }

  // === KHI BẤM "QUAY LẠI TRANG ĐĂNG NHẬP" ===
  onLoginClick(): void {
    this.currentView = 'enterEmail'; // Reset trạng thái
    this.navigateToLogin.emit();
  }
}
