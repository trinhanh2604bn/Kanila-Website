import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../components/signup/signup';
import { Login } from '../../components/login/login';
import { CommonModule } from '@angular/common';
import { ForgotPassword } from '../../components/forgot-password/forgot-password';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

export interface Notification {
  type: 'success' | 'error';
  message: string;
}

interface UserCredentials {
  username: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [Login, SignUp, CommonModule, ForgotPassword],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css',
})
export class Authentication implements OnInit {
  showLogin = true;
  showForgotPassword = false;

  notification: Notification | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  handleClientError(notification: Notification) {
    this.notification = notification;
    setTimeout(() => {
      this.notification = null;
    }, 4000);
  }

  onLogin(formData: any): void {
    const result = this.authService.loginUser(formData);

    if (result.success) {
      this.notification = null;
      this.router.navigate([' ']);
    } else {
      this.notification = {
        type: 'error',
        message: 'Đăng nhập thất bại: ' + result.message,
      };
    }
  }

  onSignup(formData: any): void {
    const result = this.authService.registerUser(formData);

    if (result.success) {
      this.notification = {
        type: 'success',
        message: 'Chúc mừng bạn đã đăng ký thành công!',
      };
      this.showLogin = true;
      this.showForgotPassword = false;
    } else {
      this.notification = {
        type: 'error',
        message: 'Đăng ký thất bại: ' + result.message,
      };
    }
  }

  // Xóa thông báo khi chuyển đổi giao diện
  onNavigateToSignup() {
    this.showLogin = false;
    this.showForgotPassword = false;
    this.notification = null;
  }
  onNavigateToLogin() {
    this.showLogin = true;
    this.showForgotPassword = false;
    this.notification = null;
  }
  onNavigateToForgotPassword() {
    this.showLogin = false;
    this.showForgotPassword = true;
    this.notification = null;
  }
}
