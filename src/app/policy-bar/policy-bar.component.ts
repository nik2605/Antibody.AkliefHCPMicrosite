import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-policy-bar',
  templateUrl: './policy-bar.component.html',
  styleUrls: ['./policy-bar.component.scss']
})
export class PolicyBarComponent implements OnInit {

  public currentLanguage: string;
  isGate = false;
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
}
