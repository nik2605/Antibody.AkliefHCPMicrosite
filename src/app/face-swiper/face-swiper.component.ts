import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions,Pagination } from 'swiper';

@Component({
  selector: 'app-face-swiper',
  templateUrl: './face-swiper.component.html',
  styleUrls: ['./face-swiper.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FaceSwiperComponent implements OnInit {

  public config: SwiperOptions = {
    spaceBetween: 30,
    mousewheel: false,
    autoplay: false,
    autoHeight: true,
    centeredSlides: true,
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
