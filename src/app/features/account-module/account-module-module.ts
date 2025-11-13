import { Routes } from '@angular/router';
import { AccountShell } from './pages/account-shell/account-shell';
import { ProfileUser } from './pages/profile-user/profile-user';
import { ChangePassword } from './pages/change-password/change-password';


export const AccountModuleModule: Routes = [
  {
    path: '',
    component: AccountShell,
    children: [
      {path: 'info', component: ProfileUser},
      {path: 'password', component: ChangePassword},

     { path: '', redirectTo: 'info', pathMatch: 'full' }
    ]
  }
]