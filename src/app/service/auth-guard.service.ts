import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    public localize: LocalizeRouterService,

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    const authCookie = this.authenticationService.isAuthCookieExists;
    if (currentUser && authCookie) {
      // authorized so return true
      return true;
    }
    var currentLanguage = this.localize.parser.currentLang;
    // not logged in so redirect to login page with the return url
    this.router.navigate([currentLanguage+'/gate']);
    return false;
  }
}
