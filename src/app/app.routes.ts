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
          import('./features/account-module/pages/profile-user/profile-user').then(
            (m) => m.ProfileUser
          ),
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./features/brand/pages/brand-list/brand-list').then((m) => m.BrandListComponent),
      },

      {
        path: 'brands/:brand',
        loadComponent: () =>
          import('./features/brand/pages/brand-catalog/brand-catalog').then(
            (m) => m.BrandCatalogComponent
          ),
      },
    ],
  },
];
