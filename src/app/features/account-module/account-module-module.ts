import { Routes } from '@angular/router';
import { AccountShell } from './pages/account-shell/account-shell';
import { ProfileUser } from './pages/profile-user/profile-user';
import { ChangePassword } from './pages/change-password/change-password';
import { Address } from './pages/address/address';
import { Favorite } from './pages/favorite/favorite';
import { Discount } from './pages/discount/discount';
import { Points } from './pages/points/points';
import { ReturnRequest } from './pages/return-request/return-request';
import { OrderManagementShell } from './pages/order-management/order-management-shell/order-management-shell';
import { OrdersProcessing } from './pages/order-management/orders-processing/orders-processing';
import { OrdersShipping } from './pages/order-management/orders-shipping/orders-shipping';
import { OrdersDelivered } from './pages/order-management/orders-delivered/orders-delivered';
import { OrdersReturn } from './pages/order-management/orders-return/orders-return';
import { OrdersCancelled } from './pages/order-management/orders-cancelled/orders-cancelled';
import { ReturnRequestDetail } from './pages/return-request-detail/return-request-detail';
import { Payment } from './pages/payment/payment';


export const AccountModuleModule: Routes = [
  {
    path: '',
    component: AccountShell,
    children: [
      {path: 'info', component: ProfileUser},
      {path: 'password', component: ChangePassword},
      {path: 'address', component: Address},
      {path: 'wishlist', component: Favorite},
      {path: 'discount', component: Discount},
      {path: 'points', component: Points},
      {path: 'returnrequest',component: ReturnRequest},
      {path: 'returndetail',component: ReturnRequestDetail},
      {path: 'pay',component: Payment},

      {
        path: 'ordershell',
        component: OrderManagementShell, 
        children: [
          { path: 'processing', component: OrdersProcessing },
          { path: 'shipping', component: OrdersShipping },
          { path: 'delivered', component: OrdersDelivered },
          { path: 'returned', component: OrdersReturn },
          { path: 'cancelled', component: OrdersCancelled },
          { path: '', redirectTo: 'processing', pathMatch: 'full' } 
        ]
      },

     { path: '', redirectTo: 'info', pathMatch: 'full' }
    ]
    
  }
]