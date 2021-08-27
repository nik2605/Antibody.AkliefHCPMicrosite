import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { ActivatedRoute, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public language_icon_text: string;
  public currentLanguage: string;
  isHide = false;
  isMobileMenu = false;
  isGate = false;
  route!: string;
  prevScrollpos = 0;
  topValue: string = '';
  blankHeight: string = '';

  constructor(public translate: TranslateService, public localize: LocalizeRouterService,
    private router: Router,
    private location: Location) {
    this.currentLanguage = this.localize.parser.currentLang
    translate.use(this.currentLanguage);
    this.language_icon_text = this.currentLanguage == "en" ? "fr" : "en";


  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    var currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.topValue = "0";
    }
    else {
      this.topValue = "-132px";
    }
    this.prevScrollpos = currentScrollPos;
  }



  switchLanguage(targetLanguage: string) {
    this.currentLanguage = targetLanguage;
    this.translate.use(targetLanguage);
    this.language_icon_text = targetLanguage == "en" ? "fr" : "en";
  }

  hideMenu() {
    this.isHide = true;
  }
  ShowMoilbeMenu() {
    this.isMobileMenu = !this.isMobileMenu;
  }

  ngOnInit(): void {
    if (window.location.pathname.toUpperCase().includes("GATE") || window.location.pathname == "/") {
      this.isGate = true;
    }

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        if (window.location.pathname.toUpperCase().includes("GATE") || window.location.pathname == "/") {
          this.isGate = true;
        }
        else {
          this.isGate = false;
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }
}
