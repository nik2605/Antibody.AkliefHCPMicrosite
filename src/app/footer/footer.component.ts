import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { ActivatedRoute, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isGate = false;
  constructor(public translate: TranslateService, public localize: LocalizeRouterService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    if (window.location.pathname.toUpperCase().includes("GATE") || window.location.pathname == "/") {
      this.isGate = true;
    }

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        if (window.location.pathname.toUpperCase().includes("GATE") || window.location.pathname == "/") {
          this.isGate = true;
        }
        else {
          this.isGate = false;
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }

}
