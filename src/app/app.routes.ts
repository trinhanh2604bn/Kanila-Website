import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';


export const routes: Routes = [
  {
    path: '',
    component: MainLayout, 
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/account-module/pages/profile-user/profile-user').then(m => m.ProfileUser)
      }
    ]
  },

  { path: '**', redirectTo: '' } // fallback
];

