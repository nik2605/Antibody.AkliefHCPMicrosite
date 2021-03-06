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
import { FaceSwiperComponent } from './face-swiper/face-swiper.component';
import { ChestSwiperComponent } from './chest-swiper/chest-swiper.component';

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, settings, http);
}

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: "reload",
  enableTracing: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100],
};

const routes: Routes = [
  { path: 'gate', component: GateComponent },
  { path: "home", component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'efficacyprofile', component: EfficacyProfileComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'safetyprofile', component: SafetyProfileComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'howtouse', component: HowToUseComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'managingirritation', component: ManagingIrritationComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'resources', component: ResourcesComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'privacypolicy', component: PrivacyPolicyComponent },
  { path: 'safetyinformation', component: SafetyInformationComponent },
  { path: 'cookiepolicy', component: CookiePolicyComponent },
  { path: '', redirectTo: "/home", pathMatch: 'full' },
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
