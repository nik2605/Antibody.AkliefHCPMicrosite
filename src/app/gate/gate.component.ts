import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  isNotValid = false;
  isInvalidShow = false;
  // unamePattern = "^[0-9]*$";

  formattedlicence_number: string = '';

  ShowList() {
    this.isShow = !this.isShow;
  }
  selectProvince(event: any) {
    this.isShow = false;
    this.selectedProvince = event.target.innerText;

  }

  public currentLanguage: string;
  constructor(public localize: LocalizeRouterService, private router: Router, private formBuilder: FormBuilder,
    private authService: AuthService,) {
    this.currentLanguage = this.localize.parser.currentLang;
  }

  // formatLicenseNumber(event: any) {
  //   this.formattedlicence_number = '';
  //   const licence_number = this.validateForm.get('licence_number')!.value.trim();
  //   for (let i = 0; i < licence_number.length; i++) {
  //     const element = licence_number[i];
  //     if (this.isdigit(element)) {
  //       this.formattedlicence_number += element;
  //     }
  //   }
  // }

  @HostListener("document:click", ['$event.target'])
  switchLanguage(event: any) {
    if (event.id == 'language_icon') {
      this.currentLanguage = event.innerText == 'EN' ? 'fr' : "en";
    }
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      province: [''],
      //licence_number: ['', Validators.pattern(this.unamePattern)]
      licence_number: ['']
    });
  }


  get f() { return this.validateForm.controls; }
  validate() {
    if (this.validateForm.valid) {
      let province: string = this.selectedProvince;
      let licence_number: string = this.f.licence_number.value;
      let hasLetter: boolean = false;
      for (let i = 0; i < licence_number.length; i++) {
        const element = licence_number[i];
        if (!this.isdigit(element)) {
          hasLetter = true;
          break;
        }
      }
      if (!hasLetter) {
        this.loading = true;
        if (this.authService.validate(province, licence_number)) {
          this.router.navigate([this.currentLanguage + '/home']);
        }
        else {
          this.isInvalidShow = true;
        }
      }
      else {
        this.isInvalidShow = true;
      }

    }
    else {
      this.isInvalidShow = true;
    }
  }
  close() {
    this.isInvalidShow = false;
  }

  isdigit(str: string) {
    return str && !/[^\d]/.test(str);
  }


}
