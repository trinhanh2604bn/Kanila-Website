import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCatalog } from './brand-catalog';

describe('BrandCatalog', () => {
  let component: BrandCatalog;
  let fixture: ComponentFixture<BrandCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
