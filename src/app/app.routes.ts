import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BeautyPreferenceComponent } from './features/account-module/pages/beauty-preference/beauty-preference';
import { Authentication } from './features/auth/pages/authentication/authentication';
import { OverlayPreference1Component } from './features/account-module/components/overlay-preference1/overlay-preference1';
import { OverlayPreference2 } from './features/account-module/components/overlay-preference2/overlay-preference2';
import { OverlayPreference3 } from './features/account-module/components/overlay-preference3/overlay-preference3';
import { BrandCatalogComponent } from './features/brand/pages/brand-catalog/brand-catalog';
import { BrandListComponent } from './features/brand/pages/brand-list/brand-list';
import { HomepageModule } from './features/homepage/homepage-module';

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
        path: 'brand-list',
        component: BrandListComponent,
      },

      {
        path: ' ',
        component: HomepageModule,
      },

      {
        path: 'brand-catalog',
        component: BrandCatalogComponent,
      },

      {
        path: 'beauty-preference',
        component: BeautyPreferenceComponent,
      },

      {
        path: 'overlay-preference1',
        component: OverlayPreference1Component,
      },

      {
        path: 'overlay-preference2',
        component: OverlayPreference2,
      },

      {
        path: 'overlay-preference3',
        component: OverlayPreference3,
      },
    ],
  },
  { path: 'auth-page', component: Authentication },
];
