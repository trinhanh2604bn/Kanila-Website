
import { Routes } from '@angular/router';
import { ReviewComponent } from './review/review'; 
import { TonKhoComponent } from './tonkho/tonkho'; 
import { KhuyenMaiComponent } from './khuyenmai/khuyenmai'; 
import { DashboardComponent } from './dashboard/dashboard'; 
import { Products } from './products/products';
import { Tichdiem } from './tichdiem/tichdiem';
import { OrderComponent } from './order/order';
import { UserComponent } from './user/user'; 


export const ADMIN_ROUTES: Routes = [
  { path: 'review', component: ReviewComponent }, 
  { path: 'tonkho', component: TonKhoComponent },
  { path: 'khuyenmai', component: KhuyenMaiComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: Products },
  { path: 'tichdiem', component: Tichdiem },
  { path: 'order', component: OrderComponent },
  { path: 'user', component: UserComponent },
  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
];