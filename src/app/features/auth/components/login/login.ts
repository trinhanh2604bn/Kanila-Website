import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Notification } from '../../pages/authentication/authentication';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  @Input() notification: Notification | null = null;
  @Output() clientError = new EventEmitter<Notification>();

  @Output() navigateToSignup = new EventEmitter<void>();

  @Output() submitLogin = new EventEmitter<any>();
  @Output() navigateToForgotPassword = new EventEmitter<void>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.clientError.emit({
        type: 'error',
        message: 'Vui lòng nhập Tên đăng nhập/Mật khẩu',
      });
      return;
    }
    this.submitLogin.emit(this.loginForm.value);
  }

  onSignupClick(): void {
    this.navigateToSignup.emit();
  }

  onForgotPasswordClick(): void {
    this.navigateToForgotPassword.emit();
  }
}
