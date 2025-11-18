import { Routes } from '@angular/router';
import { Agent } from './agent/agent';
import { Contact } from './contact/contact';
import { CookiePolicy } from './cookie-policy/cookie-policy';
import { Faq } from './faq/faq';
import { Feedback } from './feedback/feedback';
import { PaymentPolicy } from './payment-policy/payment-policy';
import { ReturnPolicy } from './return-policy/return-policy';
import { SecurityPolicy } from './security-policy/security-policy';
import { ShippingPolicy } from './shipping-policy/shipping-policy';
import { Introduction } from './introduction/introduction';

export const POLICY_ROUTES: Routes = [
  { path: 'about', component: Introduction },
  { path: 'contact', component: Contact },
  { path: 'agency-certificate', component: Agent },
  { path: 'support', component: Faq },
  { path: 'return-policy', component: ReturnPolicy },
  { path: 'privacy', component: SecurityPolicy },
  { path: 'payment-policy', component: PaymentPolicy },
  { path: 'shipping-policy', component: ShippingPolicy },
  { path: 'cookie-policy', component: CookiePolicy },
  { path: 'feedback', component: Feedback },
  { path: '', redirectTo: 'about', pathMatch: 'full' }
];
