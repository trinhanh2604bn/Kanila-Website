import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type CouponTab = 'available' | 'used' | 'expired';

interface Coupon {
  code: string;
  logoUrl: string;
  discountText: string;
  conditionText: string;
  expiredAt?: Date; // cho "đang có" & "hết hạn"
  usedAt?: Date;    // cho "đã sử dụng"
}

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discount.html',
  styleUrls: ['./discount.css'],
})
export class Discount {
  // tab đang mở
  activeTab: CouponTab = 'available';

  // danh sách mã đang có
  availableCoupons: Coupon[] = [
    {
      code: 'KANILA12',
      logoUrl: '/assets/images/logo.png',
      discountText: '15% tối đa 150.000đ',
      conditionText: 'Đơn hàng từ 800.000đ',
      expiredAt: new Date('2025-12-31'),
    },
    {
      code: 'KANILA12',
      logoUrl: '/assets/images/logo.png',
      discountText: '15% tối đa 150.000đ',
      conditionText: 'Đơn hàng từ 800.000đ',
      expiredAt: new Date('2025-12-31'),
    },
    {
      code: 'SHIPFREE',
      logoUrl: '/assets/images/logo.png',
      discountText: 'Miễn phí toàn bộ vận chuyển',
      conditionText: 'Không giới hạn giá trị đơn hàng',
      expiredAt: new Date('2025-12-31'),
    },
    {
      code: 'SHIPFREE',
      logoUrl: '/assets/images/logo.png',
      discountText: 'Miễn phí toàn bộ vận chuyển',
      conditionText: 'Không giới hạn giá trị đơn hàng',
      expiredAt: new Date('2025-12-31'),
    },
  ];

  // mã đã sử dụng
  usedCoupons: Coupon[] = [
    {
      code: 'KANILA12',
      logoUrl: '/assets/images/logo.png',
      discountText: '15% tối đa 150.000đ',
      conditionText: 'Đơn hàng từ 800.000đ',
      usedAt: new Date('2025-01-10'),
    },
    {
      code: 'SHIPFREE',
      logoUrl: '/assets/images/logo.png',
      discountText: 'Miễn phí toàn bộ vận chuyển',
      conditionText: 'Không giới hạn giá trị đơn hàng',
      usedAt: new Date('2025-02-05'),
    },
  ];

  // mã hết hạn
  expiredCoupons: Coupon[] = [
    {
      code: 'KANILA12',
      logoUrl: '/assets/images/logo.png',
      discountText: '15% tối đa 150.000đ',
      conditionText: 'Đơn hàng từ 800.000đ',
      expiredAt: new Date('2024-06-30'),
    },
    {
      code: 'SHIPFREE',
      logoUrl: '/assets/images/logo.png',
      discountText: 'Miễn phí toàn bộ vận chuyển',
      conditionText: 'Không giới hạn giá trị đơn hàng',
      expiredAt: new Date('2024-05-15'),
    },
  ];

  // đổi tab khi click
  setTab(tab: CouponTab) {
    this.activeTab = tab;
  }
}
