import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSwiperComponent } from './face-swiper.component';

describe('FaceSwiperComponent', () => {
  let component: FaceSwiperComponent;
  let fixture: ComponentFixture<FaceSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
