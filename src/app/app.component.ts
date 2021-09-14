import { Component } from '@angular/core';
import { Router, Event, Scroll, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'akliefhcpmicrosite';
  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        gtag('config', environment.googleAnalyticsTrackingID, {
          'page_title' : event.urlAfterRedirects,
          'page_path': event.urlAfterRedirects
          });
          }
        });

  }
}
