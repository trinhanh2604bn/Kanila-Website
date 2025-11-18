import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonKhoComponent } from './tonkho';

describe('Tonkho', () => {
  let component: TonKhoComponent;
  let fixture: ComponentFixture<TonKhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonKhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
