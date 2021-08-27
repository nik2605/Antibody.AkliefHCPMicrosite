import { isNgContainer } from '@angular/compiler';
import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  accessed = false;
  public currentLanguage: string;
  constructor(public localize: LocalizeRouterService, private router: Router) {
    this.currentLanguage = this.localize.parser.currentLang;
    this.checkaccess();
  }

  @HostListener("document:click", ['$event.target'])
  switchLanguage(event: any) {
    if (event.id == 'language_icon') {
      this.currentLanguage = event.innerText == 'EN' ? 'fr' : "en";
    }
  }

  ngOnInit(): void {
  }
  backtotop() {
    window.scrollTo(0, 0);
  }

  checkaccess() {
    if (localStorage.getItem('access') != 'true') {
      localStorage.setItem('access', 'true');
      this.accessed = false;
    }
    else {
      this.accessed = true;
    }
  }

}
