import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequestDetail } from './return-request-detail';

describe('ReturnRequestDetail', () => {
  let component: ReturnRequestDetail;
  let fixture: ComponentFixture<ReturnRequestDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnRequestDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnRequestDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
