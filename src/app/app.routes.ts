// // src/app/app.routes.ts

// import { Routes } from '@angular/router';
// import { AdminLayout } from './layouts/admin-layout/admin-layout'; // Admin Layout cũ
// import { MainLayout } from './layouts/main-layout/main-layout'; // Admin Layout cũ
// import { PolicyModuleModule } from './features/policy-module/policy-module-module';
// import { Agent } from './features/policy-module/agent/agent';

// export const routes: Routes = [
  
  // {
  //   path: '', 
  //   component: AdminLayout,

  //   children : [  {
  //         path: '', 
  //           component: AdminLayout,
  //           loadChildren: () => import('./features/admin-module/admin-module-module').then(m => m.ADMIN_ROUTES)
  //         loadChildren: () => import('./features/policy-module/policy-module-module').then(m => m.PolicyModuleModule)
  //         // component: Agent
  //     }
  //   // ]
  // }
  

// //   { path: '**', redirectTo: '' } 
// // 

// { 
//   path: '',
//   component: AdminLayout,
//   children:[
//     {
//       path:'',
//       loadChildren:() => import ('./features/admin-module/admin.routes').then(m => m.ADMIN_ROUTES)

//     }
//   ]
// },
// {path: '**', redirectTo: ''}
// ]




// src/app/app.routes.ts







// import { Routes } from '@angular/router';
// import { AdminLayout } from './layouts/admin-layout/admin-layout'; 


// export const routes: Routes = [
//   { 
//     path: '', 
//     component: AdminLayout, 
//     children:[
//       {
//         path:'',

//         loadChildren:() => import ('./features/admin-module/admin.routes').then(m => m.ADMIN_ROUTES)
//       }
//     ]
//   },
  

//   {path: '**', redirectTo: ''} 
// ];


import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { CommunityComponent} from './features/find-module/community/community';
import { ProductDetail } from './features/find-module/product-detail/product-detail';



export const routes: Routes = [
  { 
    path: '', 
    component: MainLayout,  // Component Layout chính chứa Header và Footer
    children: [
      {
        path: '',  // Đảm bảo tìm kiếm sẽ hiển thị khi truy cập trang chính
        component: CommunityComponent  // Component tìm kiếm
      }
    ]
  },
  { path: '**', redirectTo: '' }  // Đảm bảo các đường dẫn không tồn tại sẽ chuyển về trang chính
];



















// import { Routes } from '@angular/router';
// import { AdminLayout } from './layouts/admin-layout/admin-layout'; 
// import { MainLayout } from './layouts/main-layout/main-layout';


// export const routes: Routes = [
//   { 
//     path: '', 
//     component: MainLayout, 
//     children:[
//       {
//         path:'',

//         loadChildren:() => import ('./features/policy-module/policy.routes').then(m => m.POLICY_ROUTES)
//       }
//     ]
//   },
  

//   {path: '**', redirectTo: ''} 
// ];























































// import { Agent } from './features/policy-module/agent/agent'
// import { Contact } from './features/policy-module/contact/contact';
// import { CookiePolicy } from './features/policy-module/cookie-policy/cookie-policy';
// import { Faq } from './features/policy-module/faq/faq';
// import { Feedback } from './features/policy-module/feedback/feedback';
// import { PaymentPolicy } from './features/policy-module/payment-policy/payment-policy';
// import { ReturnPolicy } from './features/policy-module/return-policy/return-policy';
// import { SecurityPolicy } from './features/policy-module/security-policy/security-policy';
// import { ShippingPolicy } from './features/policy-module/shipping-policy/shipping-policy';
// import { Introduction } from './features/policy-module/introduction/introduction';
// import { Routes } from '@angular/router';
// import { MainLayout } from './layouts/main-layout/main-layout';  // Layout chính
//   // Import module chính của policy-module

// export const routes: Routes = [
//   { 
//     path: '', 
//     component: MainLayout, 
//     children: [
//         { path: 'about', component: Introduction },
//         { path: 'contact', component: Contact },
//         { path: 'agency-certificate', component: Agent },
//         { path: 'support', component: Faq },
//         { path: 'return-policy', component: ReturnPolicy },
//         { path: 'privacy', component: SecurityPolicy },
//         { path: 'payment-policy', component: PaymentPolicy },
//         { path: 'shipping-policy', component: ShippingPolicy },
//         { path: 'cookie-policy', component: CookiePolicy },
//         { path: 'feedback', component: Feedback },



//     ]
//   },
//   { path: '**', redirectTo: '' }  // Đảm bảo route không hợp lệ sẽ chuyển về trang chính
// ];







// import { Routes } from '@angular/router';
// import { AdminLayout } from './layouts/admin-layout/admin-layout'; 
// import { MainLayout } from './layouts/main-layout/main-layout';
// import { Agent } from './features/policy-module/agent/agent';
// import { Contact } from './features/policy-module/contact/contact';
// import { CookiePolicy } from './features/policy-module/cookie-policy/cookie-policy';
// import { Faq } from './features/policy-module/faq/faq';
// import { Feedback } from './features/policy-module/feedback/feedback';
// import { PaymentPolicy } from './features/policy-module/payment-policy/payment-policy';
// import { ReturnPolicy } from './features/policy-module/return-policy/return-policy';
// import { SecurityPolicy } from './features/policy-module/security-policy/security-policy';
// import { ShippingPolicy } from './features/policy-module/shipping-policy/shipping-policy';
// import { Introduction } from './features/policy-module/introduction/introduction';
// export const routes: Routes = [
//   { 
//     path: '', 
//     component: MainLayout, 
//     children:[
//       {
//         path:'',
//         component: Introduction
//       }
//     ]
//   },
  
//   {path: '**', redirectTo: ''}  
// ];