import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { ReturnRequest } from './features/account-module/pages/return-request/return-request';
import { AccountModuleModule } from './features/account-module/account-module-module';
import { AccountShell } from './features/account-module/pages/account-shell/account-shell';
import { AccountSidebar } from './features/account-module/components/account-sidebar/account-sidebar';
import { CheckOutPage } from './features/check-out/check-out-page/check-out-page';
import { ThankYouPage } from './features/check-out/thank-you-page/thank-you-page';
import { Cart } from './features/cart-module/cart/cart';
import { ItemCart } from './features/cart-module/item-cart/item-cart';
import { DetailOrder } from './features/check-out/detail-order/detail-order';
import { ReturnRequestDetail } from './features/account-module/pages/return-request-detail/return-request-detail';
import { CommunityPage } from './features/find-module/community-page/community-page';
import { Contact } from './features/policy-module/contact/contact';
import { Agent } from './features/policy-module/agent/agent';
import { ReturnPolicy } from './features/policy-module/return-policy/return-policy';
import { Faq } from './features/policy-module/faq/faq';
import { CookiePolicy } from './features/policy-module/cookie-policy/cookie-policy';
import { Feedback } from './features/policy-module/feedback/feedback';
import { Introduction } from './features/policy-module/introduction/introduction';
import { PaymentPolicy } from './features/policy-module/payment-policy/payment-policy';
import { SecurityPolicy } from './features/policy-module/security-policy/security-policy';
import { ShippingPolicy } from './features/policy-module/shipping-policy/shipping-policy';
import { Post } from './features/find-module/post/post';
import { Postdetail } from './features/find-module/postdetail/postdetail';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Category } from './features/product/pages/category/category';
import { ProductDetail } from './features/product/pages/product-detail/product-detail';
import { Mainpage } from './features/homepage/pages/mainpage/mainpage';
import { BrandListComponent } from './features/brand/pages/brand-list/brand-list';
import { BeautyPreferenceComponent } from './features/account-module/pages/beauty-preference/beauty-preference';
import { OverlayPreference1Component } from './features/account-module/components/overlay-preference1/overlay-preference1';
import { OverlayPreference2 } from './features/account-module/components/overlay-preference2/overlay-preference2';
import { OverlayPreference3 } from './features/account-module/components/overlay-preference3/overlay-preference3';
import { Authentication } from './features/auth/pages/authentication/authentication';
import { ProductList } from './features/product/components/product-list/product-list';
import { ProductCardComponent } from './shared/components/product-card/product-card';
import { OrdersShipping } from './features/account-module/pages/order-management/orders-shipping/orders-shipping';


export const routes: Routes = [
  // { path: '', redirectTo: 'auth-page', pathMatch: 'full' },

  // đăng nhập
  // { path: 'auth-page', component: Authentication },
  // trang chính
  {path: 'mainpage',component: Mainpage},
  
  // account
  {
    path: '',
    component: MainLayout, 
    children: [
      // hồ sơ
      {
        path: 'account',
        loadChildren: () =>
          import('./features/account-module/account-module-module').then(m => m.AccountModuleModule)
      },
      // giỏ hàng
      {path: 'cart',component: Cart},
      {path: 'checkout', component: CheckOutPage},
      { path: 'thanks', component: ThankYouPage},
      { path: 'detail', component: DetailOrder },

      // mxh
      {path: 'communitypage',component: CommunityPage },
      //  blog
      { path: 'blog', component: Post },
      // blog chi tiết 
      { path: 'postdetail/:id', component: Postdetail },

      // chính sách
      {path: 'contact',component: Contact },
      { path: 'agent', component: Agent},
      { path: 'returnpolicy', component: ReturnPolicy},
      { path: 'faq', component: Faq },
      { path: 'cookie', component: CookiePolicy },
      { path: 'feedback', component: Feedback },
      { path: 'intro', component: Introduction },
      { path: 'paymentpolicy', component: PaymentPolicy },
      { path: 'security', component: SecurityPolicy },
      { path: 'shippolicy', component: ShippingPolicy },
      
      // trang chính
      {path: 'productlist1', component: ProductCardComponent},
      {path: 'productlist', component: ProductList},

      {path: 'category',component: Category},
      {path: 'detail/:slug',component: ProductDetail},
      // brand
      {path: 'brand-list', component: BrandListComponent,  },
      { path: 'beauty-preference',component: BeautyPreferenceComponent, },
      { path: 'overlay-preference1', component: OverlayPreference1Component,  },
      { path: 'overlay-preference2', component: OverlayPreference2,},
      { path: 'overlay-preference3', component: OverlayPreference3,  },

    ]
  },
  // admin
  {
    path: 'admin',
    component: AdminLayout,
    children:[
      {
        path:'',
        loadChildren:() => import ('./features/admin-module/admin.routes').then(m => m.ADMIN_ROUTES)
      }
    ]
  },

  { path: '**', redirectTo: '' }
]; 

