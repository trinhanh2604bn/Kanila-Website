import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bfslider } from './bfslider';

describe('Bfslider', () => {
  let component: Bfslider;
  let fixture: ComponentFixture<Bfslider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bfslider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bfslider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
