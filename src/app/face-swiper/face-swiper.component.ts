import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { SwiperOptions, Pagination } from 'swiper';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-swiper',
  templateUrl: './face-swiper.component.html',
  styleUrls: ['./face-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaceSwiperComponent implements OnInit {

  baselineWidth: string = '50%';
  isMouseDown = false;
  public currentLanguage: string;
  public config: SwiperOptions = {
    spaceBetween: 30,
    mousewheel: false,
    autoplay: false,
    autoHeight: true,
    centeredSlides: true,
    allowTouchMove: false,
    loop: true,
    pagination: {
      el: '.swiper-pagination', clickable: true, renderBullet: function (index, className) {
        return '<span class="' + className + '"><img src="../../assets/images/face' + index + '_icon.png"></span>';
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  }
  constructor(public localize: LocalizeRouterService, private router: Router) {
    this.currentLanguage = this.localize.parser.currentLang;
  }
  @HostListener("document:click", ['$event.target'])
  switchLanguage(event: any) {
    if (event.id == 'language_icon') {
      this.currentLanguage = event.innerText == 'EN' ? 'fr' : "en";
    }
  }

  ngOnInit(): void {
  }


  turnOnMove() {
    this.isMouseDown = true;
  }
  moveArrow(event: MouseEvent) {
    if (this.isMouseDown && event.which == 1) {
      var parentWidth = (event.target as HTMLImageElement).clientWidth;
      var offsetx = (event as MouseEvent).offsetX;

      if (parentWidth != 1 && offsetx != 0) {
        this.baselineWidth = (offsetx / parentWidth * 100) + '%';
        console.log((event as MouseEvent).offsetX + ' ' + (event.target as HTMLImageElement).clientWidth);
      }


    }
  }
  turnOffMove(event: MouseEvent) {
    if (event.which == 1) {
      this.isMouseDown = false;
      var parentWidth = (event.target as HTMLImageElement).clientWidth;
      var offsetx = (event as MouseEvent).offsetX;

      if (parentWidth != 1 && offsetx != 0) {
        this.baselineWidth = (offsetx / parentWidth * 100) + '%';
      }
    }
  }

  resetLine() {
    this.baselineWidth = '50%';
  }
}
