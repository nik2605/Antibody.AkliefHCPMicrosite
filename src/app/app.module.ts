import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GateComponent } from './gate/gate.component';
import { HomeComponent } from './home/home.component';
import { EfficacyProfileComponent } from './efficacy-profile/efficacy-profile.component';
import { SafetyProfileComponent } from './safety-profile/safety-profile.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { ManagingIrritationComponent } from './managing-irritation/managing-irritation.component';
import { ResourcesComponent } from './resources/resources.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SafetyInformationComponent } from './safety-information/safety-information.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PolicyBarComponent } from './policy-bar/policy-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { getSaver, SAVER } from './service/saver.provider';
import { HomeprevalencesSwiperComponent } from './homeprevalences-swiper/homeprevalences-swiper.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HomeoverviewswiperComponent } from './homeoverviewswiper/homeoverviewswiper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafetyinformationComponent } from './popup/safetyinformation/safetyinformation.component';
import { FaceSwiperComponent } from './face-swiper/face-swiper.component';
import { ChestSwiperComponent } from './chest-swiper/chest-swiper.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    GateComponent,
    HomeComponent,
    EfficacyProfileComponent,
    SafetyProfileComponent,
    HowToUseComponent,
    ManagingIrritationComponent,
    ResourcesComponent,
    PrivacyPolicyComponent,
    SafetyInformationComponent,
    CookiePolicyComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    PolicyBarComponent,
    HomeprevalencesSwiperComponent,
    HomeoverviewswiperComponent,
    SafetyinformationComponent,
    FaceSwiperComponent,
    ChestSwiperComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [AuthGuard, CookieService,
    {
      provide: { HTTP_INTERCEPTORS, SAVER },
      useClass: AuthService,
      multi: true
    },
    {
      provide: SAVER,
      useFactory: getSaver
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
