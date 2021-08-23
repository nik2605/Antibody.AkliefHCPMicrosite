import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprevalencesSwiperComponent } from './homeprevalences-swiper.component';

describe('HomeprevalencesSwiperComponent', () => {
  let component: HomeprevalencesSwiperComponent;
  let fixture: ComponentFixture<HomeprevalencesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprevalencesSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprevalencesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
