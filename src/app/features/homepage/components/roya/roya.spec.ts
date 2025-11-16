import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roya } from './roya';

describe('Roya', () => {
  let component: Roya;
  let fixture: ComponentFixture<Roya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
