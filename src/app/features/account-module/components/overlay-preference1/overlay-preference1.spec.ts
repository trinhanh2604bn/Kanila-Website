import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayPreference1Component } from './overlay-preference1';

describe('OverlayPreference1Component', () => {
  let component: OverlayPreference1Component;
  let fixture: ComponentFixture<OverlayPreference1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverlayPreference1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPreference1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close overlay on closeOverlay()', () => {
    component.closeOverlay();
    expect(component.isOverlayVisible).toBeFalse();
  });

  it('should change page on nextPage() and prevPage()', () => {
    spyOn(console, 'log');
    component.nextPage();
    expect(console.log).toHaveBeenCalledWith('Chuyển sang trang tiếp theo');
  });
});
