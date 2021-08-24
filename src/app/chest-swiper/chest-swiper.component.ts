import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions, Pagination } from 'swiper';

@Component({
  selector: 'app-chest-swiper',
  templateUrl: './chest-swiper.component.html',
  styleUrls: ['./chest-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChestSwiperComponent implements OnInit {
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
