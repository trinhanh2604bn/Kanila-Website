import { Routes } from '@angular/router';
import { MainLayout } from '../layouts/main-layout/main-layout';
import { Post } from '../layouts/main-layout/post/post';
import { Postdetail } from '../layouts/main-layout/postdetail/postdetail';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full' },

      // Trang danh sách blog
      { path: 'blog', component: Post },

      // Trang chi tiết – có id
      { path: 'postdetail/:id', component: Postdetail },
    ],
  },
];
