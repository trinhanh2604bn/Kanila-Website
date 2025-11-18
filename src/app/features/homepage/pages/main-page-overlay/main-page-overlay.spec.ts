import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageOverlay } from './main-page-overlay';

describe('MainPageOverlay', () => {
  let component: MainPageOverlay;
  let fixture: ComponentFixture<MainPageOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageOverlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageOverlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
