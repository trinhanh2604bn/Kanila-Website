import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeautyPreferenceComponent } from './beauty-preference';

describe('BeautyPreference', () => {
  let component: BeautyPreferenceComponent;
  let fixture: ComponentFixture<BeautyPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyPreferenceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeautyPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
