import { Routes } from '@angular/router';
import { AccountShell } from './pages/account-shell/account-shell';
import { ProfileUser } from './pages/profile-user/profile-user';
import { ChangePassword } from './pages/change-password/change-password';
import { Address } from './pages/address/address';
import { Favorite } from './pages/favorite/favorite';
import { Discount } from './pages/discount/discount';
import { Points } from './pages/points/points';
import { ReturnRequest } from './pages/return-request/return-request';


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
      {path: 'return', component: ReturnRequest},

     { path: '', redirectTo: 'info', pathMatch: 'full' }
    ]
  }
]