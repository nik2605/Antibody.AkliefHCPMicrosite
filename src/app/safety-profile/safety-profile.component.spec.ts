import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyProfileComponent } from './safety-profile.component';

describe('SafetyProfileComponent', () => {
  let component: SafetyProfileComponent;
  let fixture: ComponentFixture<SafetyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
