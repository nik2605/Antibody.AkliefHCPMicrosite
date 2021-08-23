import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public language_icon_text: string;
  public currentLanguage:string;
  isHide = false;
  isMobileMenu = false;
  isGate = false;

  constructor(public translate: TranslateService,public localize: LocalizeRouterService,private router:ActivatedRoute) {
    this.currentLanguage = this.localize.parser.currentLang
    translate.use(this.currentLanguage);
    this.language_icon_text = this.currentLanguage == "en"?"fr":"en";
    if(window.location.href.toUpperCase().includes("GATE")){
      this.isGate = true;
    }
  }


  switchLanguage(targetLanguage:string){
    this.currentLanguage = targetLanguage;
    this.translate.use(targetLanguage);
    this.language_icon_text = targetLanguage == "en"?"fr":"en";
  }

  hideMenu() {
    this.isHide = true;
  }
  ShowMoilbeMenu() {
    this.isMobileMenu = !this.isMobileMenu;
  }

  ngOnInit(): void {
  }


}
