import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingIrritationComponent } from './managing-irritation.component';

describe('ManagingIrritationComponent', () => {
  let component: ManagingIrritationComponent;
  let fixture: ComponentFixture<ManagingIrritationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagingIrritationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingIrritationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
