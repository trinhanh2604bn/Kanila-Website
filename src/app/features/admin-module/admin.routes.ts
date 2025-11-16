
import { Routes } from '@angular/router';



import { ReviewComponent } from './review/review'; // (Duyệt bài/Đánh giá)
import { TonKhoComponent } from './tonkho/tonkho'; // (Tồn Kho)
import { KhuyenMaiComponent } from './khuyenmai/khuyenmai'; // (Khuyến mãi)
import { DashboardComponent } from './dashboard/dashboard'; // (Dashboard)
import { Products } from './products/products'; // (Quản lý Sản phẩm)
import { Banner } from './banner/banner'; // (Banner/Bộ sưu tập)
import { Tichdiem } from './tichdiem/tichdiem'; // (Thiết lập Tích điểm)
import { OrderComponent } from './order/order'; // (Đơn hàng)
import { UserComponent } from './user/user'; // (Quản lý Người dùng)


export const ADMIN_ROUTES: Routes = [
  // Cấu hình các route Admin:
  { path: 'review', component: ReviewComponent }, 
  { path: 'tonkho', component: TonKhoComponent },
  { path: 'khuyenmai', component: KhuyenMaiComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: Products },
  { path: 'banner', component: Banner },
  { path: 'tichdiem', component: Tichdiem },
  { path: 'order', component: OrderComponent },
  { path: 'user', component: UserComponent },
  
  // Mặc định của /admin sẽ chuyển hướng đến Dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
];