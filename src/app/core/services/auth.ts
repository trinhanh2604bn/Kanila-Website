import { Injectable } from '@angular/core';

interface UserCredentials {
  username: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_STORAGE_KEY = 'kanila_users';

  constructor() {}

  private getAllUsers(): UserCredentials[] {
    const usersJson = localStorage.getItem(this.USER_STORAGE_KEY);
    if (usersJson) {
      try {
        return JSON.parse(usersJson);
      } catch (e) {
        console.error('Error parsing user data from localStorage:', e);
        return [];
      }
    }
    return [];
  }

  private saveUsers(users: UserCredentials[]): void {
    localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(users));
  }

  registerUser(credentials: UserCredentials): { success: boolean; message: string } {
    const users = this.getAllUsers();

    const userExists = users.some(
      (u) => u.username === credentials.username || u.email === credentials.email
    );

    if (userExists) {
      return { success: false, message: 'Tên đăng nhập/Email đã tồn tại.' };
    }

    users.push(credentials);
    this.saveUsers(users);

    return { success: true, message: 'Đăng ký thành công!' };
  }

  loginUser(credentials: { username: string; password: string }): {
    success: boolean;
    message: string;
  } {
    const users = this.getAllUsers();

    const user = users.find((u) => u.username === credentials.username);

    if (!user) {
      return { success: false, message: 'Tên đăng nhập không tồn tại.' };
    }

    if (user.password === credentials.password) {
      return { success: true, message: 'Đăng nhập thành công.' };
    } else {
      return { success: false, message: 'Sai mật khẩu.' };
    }
  }
}
