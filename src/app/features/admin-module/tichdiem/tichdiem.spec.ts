import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tichdiem } from './tichdiem';

describe('Tichdiem', () => {
  let component: Tichdiem;
  let fixture: ComponentFixture<Tichdiem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tichdiem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tichdiem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
