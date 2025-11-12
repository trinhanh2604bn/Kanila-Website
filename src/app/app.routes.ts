import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'brands',
    loadComponent: () =>
      import('./features/brand/pages/brand-list/brand-list').then((m) => m.BrandListComponent),
  },
  {
    path: '',
    redirectTo: '/brands',
    pathMatch: 'full',
  },
];
