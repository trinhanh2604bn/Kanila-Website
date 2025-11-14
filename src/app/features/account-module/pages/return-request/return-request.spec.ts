import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequest } from './return-request';

describe('ReturnRequest', () => {
  let component: ReturnRequest;
  let fixture: ComponentFixture<ReturnRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
