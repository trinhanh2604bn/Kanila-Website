import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postdetail } from './postdetail';

describe('Postdetail', () => {
  let component: Postdetail;
  let fixture: ComponentFixture<Postdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
