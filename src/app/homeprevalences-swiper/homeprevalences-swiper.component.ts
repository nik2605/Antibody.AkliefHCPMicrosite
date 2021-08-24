import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions,Pagination } from 'swiper';

@Component({
  selector: 'app-homeprevalences-swiper',
  templateUrl: './homeprevalences-swiper.component.html',
  styleUrls: ['./homeprevalences-swiper.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeprevalencesSwiperComponent implements OnInit {

  public config: SwiperOptions = {
    //slidesPerView:'auto',
    spaceBetween: 30,
    mousewheel: false,
    autoplay: false,
    autoHeight: true,
    centeredSlides:true,
    loop:true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

}
