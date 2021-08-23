import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent implements OnInit {
  isShow = false;
  selectedProvince: string = '';
  validateForm!: FormGroup;
  loading = false;


  ShowList() {
    this.isShow = !this.isShow;
  }
  selectProvince(event: any) {
    this.isShow = !this.isShow;
    this.selectedProvince = event.target.innerText;

  }

  public currentLanguage: string;
  constructor(public localize: LocalizeRouterService, private router: Router,private formBuilder: FormBuilder,
    private authService : AuthService,) {
    this.currentLanguage = this.localize.parser.currentLang;
  }

  @HostListener("document:click", ['$event.target'])
  switchLanguage(event: any) {
    if (event.id == 'language_icon') {
      this.currentLanguage = event.innerText == 'EN' ? 'fr' : "en";
    }
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      province: [''],
      licence_number: ['']
    });
  }

  get f() { return this.validateForm.controls; }
  validate() {
    if (this.validateForm.valid) {
      this.loading = true;
      if(this.authService.validate(this.f.province.value, this.f.licence_number.value)){
        this.router.navigate([this.currentLanguage+'/home']);
      }
  }
  else{
  }
  }
}
