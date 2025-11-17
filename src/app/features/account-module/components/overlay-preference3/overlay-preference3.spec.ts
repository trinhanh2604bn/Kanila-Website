import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPreference3 } from './overlay-preference3';

describe('OverlayPreference3', () => {
  let component: OverlayPreference3;
  let fixture: ComponentFixture<OverlayPreference3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayPreference3],
    }).compileComponents();

    fixture = TestBed.createComponent(OverlayPreference3);
    component = fixture.componentInstance;
    fixture.detectChanges();

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
      component.prevPage();
      expect(console.log).toHaveBeenCalledWith('Quay lại trang trước');
    });
  });
});
