import { Component } from '@angular/core';

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
}
