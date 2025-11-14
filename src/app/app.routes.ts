import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

// Dùng 'export const' để biến này có thể được import ở nơi khác
export const routes: Routes = [ 
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/account-module/account-module-module').then(m => m.AccountModuleModule)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];