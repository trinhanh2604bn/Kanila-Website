import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsePanel } from './collapse-panel';

describe('CollapsePanel', () => {
  let component: CollapsePanel;
  let fixture: ComponentFixture<CollapsePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
