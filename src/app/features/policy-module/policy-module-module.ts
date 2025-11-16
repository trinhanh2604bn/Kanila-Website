import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import các standalone components
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
import { RouterModule } from '@angular/router';  // Import RouterModule

@NgModule({
  imports: [
    CommonModule,
    RouterModule,  // Đảm bảo RouterModule được import
    Agent,
    Contact,
    CookiePolicy,
    Faq,
    Feedback,
    PaymentPolicy,
    ReturnPolicy,
    SecurityPolicy,
    ShippingPolicy,
    Introduction
  ]
})
export class PolicyModuleModule { }
