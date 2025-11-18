import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';



@Component({
  selector: 'app-product-detail',
  imports: [ CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
 product: any;
  slug: string = '';
  isAccordionOpen: any = {
    productDetails: false,
    ingredients: false,
    usage: false
  };

  // --- THÊM CÁC BIẾN TÙY CHỈNH ---
  public reviewCount: number = 0;
  public color: string = '';
  public features: string[] = [];
  public currentRating: number = 5; // Luôn hiển thị 5 sao

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Lấy slug từ URL
    const documentId = this.route.snapshot.paramMap.get('slug') as string;
    if (documentId) {
      this.fetchProductData(documentId);
    }
  }

  fetchProductData(documentId: string): void {
    // LƯU Ý: Dựa trên getProductById(productId) của bạn, tôi giả định slug chính là productId
    this.productService.getProductById(documentId).subscribe(
      (data: any) => {
        this.product = data;

        // Ánh xạ và Random hóa dữ liệu bị thiếu
        // 1. Random Số lượng đánh giá
        this.reviewCount = Math.floor(Math.random() * (150 - 50 + 1)) + 50;

        // 2. Random Phân loại màu (Nếu không có trong API)
        const colors = ['Màu Đỏ Cam', 'Màu Hồng Đất', 'Màu Nude'];
        this.color = colors[Math.floor(Math.random() * colors.length)];

        // 3. Xử lý Điểm nổi bật (Sử dụng trường 'highlight' và đặt tên là 'features')
        // Giả định 'highlight' là một mảng string
        this.features = data.highlight || ['Thành phần tự nhiên', 'Sản phẩm mới', 'An toàn cho da'];
      },
      (error) => {
        console.error('Error fetching product data', error);
      }
    );
  }

  toggleAccordion(section: string): void {
    this.isAccordionOpen[section] = !this.isAccordionOpen[section];
  }
}
