import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyinformationComponent } from './safetyinformation.component';

describe('SafetyinformationComponent', () => {
  let component: SafetyinformationComponent;
  let fixture: ComponentFixture<SafetyinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
