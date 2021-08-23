import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safetyinformation',
  templateUrl: './safetyinformation.component.html',
  styleUrls: ['./safetyinformation.component.scss']
})
export class SafetyinformationComponent implements OnInit {

  isShow = false;
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.isShow = !this.isShow;
  }
}
