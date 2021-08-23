import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-homeprevalences-swiper',
  templateUrl: './homeprevalences-swiper.component.html',
  styleUrls: ['./homeprevalences-swiper.component.scss']
})
export class HomeprevalencesSwiperComponent implements OnInit {

  public config: SwiperOptions = {
    spaceBetween: 30,
    mousewheel: false,
    autoplay: false,
    autoHeight: true,
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
