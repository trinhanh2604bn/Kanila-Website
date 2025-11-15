import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-silder',
  standalone: true,
  templateUrl: './silder.html',
  styleUrl: './silder.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Silder {
  autoplay = JSON.stringify({
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  });
}

  // constructor() {
  //   // Khởi tạo Swiper khi component được tạo
  //   this.initSwiper();
  // }

  // initSwiper() {
  //   const swiper = new Swiper('.beautySwiper', {
  //     speed: 900,
  //     effect: 'slide',      // Sử dụng hiệu ứng slide cho chuyển động
  //     direction: 'horizontal',
  //     autoplay: JSON.parse(this.autoplay),  // Parse lại từ JSON string thành object
  //     loop: true,
  //     navigation: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },


//     });
//   }


// }



