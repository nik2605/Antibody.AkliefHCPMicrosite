import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficacyProfileComponent } from './efficacy-profile.component';

describe('EfficacyProfileComponent', () => {
  let component: EfficacyProfileComponent;
  let fixture: ComponentFixture<EfficacyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfficacyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficacyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
