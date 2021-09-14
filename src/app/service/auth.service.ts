import { Injectable, Inject, ErrorHandler, Injector } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { map, catchError, throwIfEmpty, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Guid } from "guid-typescript";
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;



  rootUrl;
  readonly authcookie = 'Aklief.Auth';

  constructor(private router: Router,
    private http: HttpClient,
    private cookieService: CookieService,
    private toasterService: ToastrService,
    @Inject('BASE_URL') baseUrl: string,
    private injector: Injector) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    this.rootUrl = baseUrl;
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public get isAuthCookieExists(): boolean {
    return this.cookieService.check(this.authcookie);
  }

  validate(province: string, number: string): boolean {

    //if(username == "test" && password == "test"){
    //if(province == environment.province && number == environment.licence_number){
    if (number.length >= 3 && number.length <= 9 && province.length > 0 && this.checkSameChar(number)) {
      switch (province) {
        case 'Alberta':
          if (number.length < 4 || number.length > 6) {
            return false;
          }
          break;
        case 'British Columbia':
        case 'Colombie-Britannique':
          break;
        case 'New Brunswick':
        case 'Nouveau-Brunswick':
          if (number.length < 4 || number.length > 7) {
            return false;
          }
          break;
        case 'Newfoundland and Labrador':
        case 'Terre-Neuve-et-Labrador':
          if (number.length < 5 || number.length > 6) {
            return false;
          }
          break;
        case 'Northwest Territories':
        case 'Territoires du Nord-Ouest':
          break;
        case 'Nova Scotia':
        case 'Nouvelle-Écosse':
          if (number.length < 3 || number.length > 6) {
            return false;
          }
          break;
        case 'Nunavut':
          break;
        case 'Ontario':
          if (number.length < 5 || number.length > 6) {
            return false;
          }
          break;
        case 'Prince Edward Island':
        case 'Île-du-Prince-Édouard':
          break;
        case 'Quebec':
        case 'Québec':
          if (number.length < 5 || number.length > 6) {
            return false;
          }
          break;
        case 'Saskatchewan':
          break;
        case 'Yukon':
          break;
        default:
          break;
      }
      localStorage.setItem('currentUser', JSON.stringify(province + number));
      this.currentUserSubject.next(province + number);
      this.cookieService.set(this.authcookie, Guid.create().toString(), 0.02083, '', '', true, "None");
      return true;
    }
    else {
      return false;
    }
  }

  checkSameChar(number: string) {
    var isDifferent = true;
    for (let i = 0; i < number.length; i++) {
      if (number[i] == number[0]) {
        isDifferent = false
      }
      else {
        isDifferent = true;
        break;
      }

    }
    return isDifferent;
  }

  tryLogin(returnUrl: string) {

    const currentUser = this.currentUserSubject.value;
    const authCookie = this.isAuthCookieExists;

    if (authCookie) {
      this.router.navigate([returnUrl]);
      return;
    }
    this.logout();
    this.router.navigate(['/login']);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.cookieService.delete(this.authcookie);
    this.currentUserSubject.next(null);
  }
}
