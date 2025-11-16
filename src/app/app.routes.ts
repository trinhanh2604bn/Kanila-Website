import { Routes } from '@angular/router';
import { Mainpage } from './features/homepage/pages/mainpage/mainpage';
import { MainLayout  } from './layouts/main-layout/main-layout';
import { Component } from '@angular/core';


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
    component: Mainpage}

];
