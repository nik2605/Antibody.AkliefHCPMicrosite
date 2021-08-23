import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeoverviewswiperComponent } from './homeoverviewswiper.component';

describe('HomeoverviewswiperComponent', () => {
  let component: HomeoverviewswiperComponent;
  let fixture: ComponentFixture<HomeoverviewswiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeoverviewswiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeoverviewswiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
