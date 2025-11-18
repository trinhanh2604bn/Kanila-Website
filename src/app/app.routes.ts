import { Routes } from '@angular/router';
import { Mainpage } from './features/homepage/pages/mainpage/mainpage';
import { MainLayout  } from './layouts/main-layout/main-layout';
import { Component } from '@angular/core';
import { Category } from './features/product/pages/category/category';
import { ProductDetail } from './features/product/pages/product-detail/product-detail';


export const routes: Routes = [
    // {
    // path:'',
    // component:MainLayout,
    // children: [
    //   {
    //     path: '',
    //     component: Mainpage
    //   }
    // ] }
    {path:'',
    component: Mainpage},

    {
      path:'product',
      component: MainLayout,
      children: [
        {
          path: 'category',
          component: Category
        },
        {
          path: 'detail/:slug',
          component: ProductDetail
        }
      ]

    }

];
