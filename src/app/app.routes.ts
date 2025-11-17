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


export const routes: Routes = [
  {
    path: '',
    component: MainLayout, 
    children: [
      // { path: '', redirectTo: 'profile', pathMatch: 'full'},
      {
        path: 'account',
        loadChildren: () =>
          import('./features/account-module/account-module-module').then(m => m.AccountModuleModule)
      },
      {
        path: 'cart',
        component: Cart
      },
      {
        path: 'checkout',
        component: CheckOutPage
      },
      {
        path: 'thanks',
        component: ThankYouPage
      },
      {
        path: 'detail',
        component: DetailOrder
      },
      {
        path: 'communitypage',
        component: CommunityPage
      },
      {
        path: 'contact',
        component: Contact
      },
      {
        path: 'agent',
        component: Agent
      },
      {
        path: 'returnpolicy',
        component: ReturnPolicy
      },
      {
        path: 'faq',
        component: Faq
      },
      {
        path: 'cookie',
        component: CookiePolicy
      },
      {
        path: 'feedback',
        component: Feedback
      },
      {
        path: 'intro',
        component: Introduction
      },
      {
        path: 'paymentpolicy',
        component: PaymentPolicy
      },
      {
        path: 'security',
        component: SecurityPolicy
      },
      {
        path: 'shippolicy',
        component: ShippingPolicy
      },
      // Trang danh sách blog
      { path: 'blog', component: Post },

      // Trang chi tiết – có id
      { path: 'postdetail/:id', component: Postdetail },
    ]
  },

  { path: '**', redirectTo: '' }
]; 

