import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterHttpLoader } from 'localize-router-http-loader';
import { CommonModule, Location } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { GateComponent } from './gate/gate.component';
import { EfficacyProfileComponent } from './efficacy-profile/efficacy-profile.component';
import { ManagingIrritationComponent } from './managing-irritation/managing-irritation.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ResourcesComponent } from './resources/resources.component';
import { SafetyInformationComponent } from './safety-information/safety-information.component';
import { SafetyProfileComponent } from './safety-profile/safety-profile.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { AuthGuard } from './service/auth-guard.service';
import { HomeprevalencesSwiperComponent } from './homeprevalences-swiper/homeprevalences-swiper.component';
import { SafetyinformationComponent } from './popup/safetyinformation/safetyinformation.component';

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, settings, http);
}

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: "reload",
  enableTracing: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};

const routes: Routes = [
  { path: 'gate', component: GateComponent },
  { path: "home", component: HomeComponent },
  { path: 'efficacyprofile', component: EfficacyProfileComponent, },
  { path: 'safetyprofile', component: SafetyProfileComponent },
  { path: 'howtouse', component: HowToUseComponent },
  { path: 'managingirritation', component: ManagingIrritationComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'privacypolicy', component: PrivacyPolicyComponent },
  { path: 'safetyinformation', component: SafetyInformationComponent },
  { path: 'cookiepolicy', component: CookiePolicyComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'silder', component: HomeprevalencesSwiperComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routerOptions),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule { }
