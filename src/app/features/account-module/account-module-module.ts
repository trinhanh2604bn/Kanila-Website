import { Routes } from '@angular/router';
import { AccountShell } from './pages/account-shell/account-shell';
import { ProfileUser } from './pages/profile-user/profile-user';


export const AccountModuleModule: Routes = [
  {
    path: '',
    component: AccountShell,
    children: [
      {path: 'info', component: ProfileUser},

     { path: '', redirectTo: 'info', pathMatch: 'full' }
    ]
  }
]