import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { ReturnRequest } from './features/account-module/pages/return-request/return-request';
import { CartPage } from './features/cart-module/pages/cart-page/cart-page';
import { AccountModuleModule } from './features/account-module/account-module-module';
import { AccountShell } from './features/account-module/pages/account-shell/account-shell';
import { AccountSidebar } from './features/account-module/components/account-sidebar/account-sidebar';
import { CheckOutPage } from './features/check-out/check-out-page/check-out-page';
import { ThankYouPage } from './features/check-out/thank-you-page/thank-you-page';


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
        component: CartPage
      },
      {
        path: 'checkout',
        component: CheckOutPage
      },
      {
        path: 'thanks',
        component: ThankYouPage
      },
    ]
  },

  // { path: '**', redirectTo: '' }
];

