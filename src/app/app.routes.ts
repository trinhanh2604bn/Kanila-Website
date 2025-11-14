import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Mainpage } from './features/homepage/pages/mainpage/mainpage';

export const routes: Routes = [
  // {
  //   path: 'brands',
  //   loadComponent: () =>
  //     import('./features/brand/pages/brand-list/brand-list').then((m) => m.BrandListComponent),
  // },
  // {
  //   path: '',
  //   redirectTo: '/brands',
  //   pathMatch: 'full',
  // },
  {
    path:'',
    component:Mainpage
  }
];
