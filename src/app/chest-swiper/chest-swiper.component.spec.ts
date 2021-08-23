import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestSwiperComponent } from './chest-swiper.component';

describe('ChestSwiperComponent', () => {
  let component: ChestSwiperComponent;
  let fixture: ComponentFixture<ChestSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChestSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
