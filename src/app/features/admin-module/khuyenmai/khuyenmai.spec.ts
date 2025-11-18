import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common'; 
import { KhuyenMaiComponent } from './khuyenmai';

describe('KhuyenMaiComponent', () => { 
  let component: KhuyenMaiComponent;
  let fixture: ComponentFixture<KhuyenMaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        KhuyenMaiComponent, 
        CommonModule 
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhuyenMaiComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});