import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
subscribe(ev: Event) {
    ev.preventDefault();
    alert('Cảm ơn bạn đã đăng ký!');
  }

  constructor(private router: Router) {}

  goContact() {
    this.router.navigate(['contact']);
  }
  goAgent() {
    this.router.navigate(['agent']);
  }
  goReturnPolicy() {
    this.router.navigate(['returnpolicy']);
  }
  goFaq() {
    this.router.navigate(['faq']);
  }
  goShip() {
    this.router.navigate(['shippolicy']);
  }
  goSecurity() {
    this.router.navigate(['security']);
  }
  goCookie() {
    this.router.navigate(['cookie']);
  }
  goPayPolicy() {
    this.router.navigate(['paymentpolicy']);
  }
  goPB() {
    this.router.navigate(['feedback']);
  }
  goIntro() {
    this.router.navigate(['intro']);
  }
}
