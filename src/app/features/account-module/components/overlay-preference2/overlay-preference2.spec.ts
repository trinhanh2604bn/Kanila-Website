import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayPreference2 } from './overlay-preference2';

describe('OverlayPreference1Component', () => {
  let component: OverlayPreference2;
  let fixture: ComponentFixture<OverlayPreference2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverlayPreference2],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPreference2);
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
    component.prevPage();
    expect(console.log).toHaveBeenCalledWith('Quay lại trang trước');
  });
});
