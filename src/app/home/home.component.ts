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
    var time = new Date();
    var currentTime = time.toString();
    var lastAccessTime = localStorage.getItem('accessTime');

    if (lastAccessTime != null && lastAccessTime!.length > 0) {
      var currentTimeInTime = new Date(currentTime);
      var lastAccessTimeInTime = new Date(lastAccessTime!)
      var diff = currentTimeInTime.getTime() - lastAccessTimeInTime.getTime();
      // var days = Math.floor(diff / (60 * 60 * 24 * 1000));
      // var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
      // var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
      var minutes = Math.floor(diff / (60 * 1000));

      if (minutes >= 30) {
        this.accessed = false;
        localStorage.setItem('accessTime', currentTime);
      }
      else {
        this.accessed = true;

      }
    }
    else {
      localStorage.setItem('accessTime', currentTime);
    }


    // if (localStorage.getItem('access') != 'true') {
    //   localStorage.setItem('access', 'true');
    //   this.accessed = false;
    // }
    // else {
    //   this.accessed = true;
    // }
  }

}
