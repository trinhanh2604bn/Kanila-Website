import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFilterComponent } from '../../../../shared/components/category-filter/category-filter';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-brand-catalog',
  standalone: true,
  imports: [CommonModule, CategoryFilterComponent, ProductCardComponent],
  templateUrl: './brand-catalog.html',
  styleUrls: ['./brand-catalog.css'],
})
export class BrandCatalogComponent {
  catalogTitle: string = 'Dior';
  products = [
    {
      brand: 'Dior',
      name: 'Má hồng Backstage Glow Maximizer',
      price: '540.000đ',
      image: 'https://www.sephora.com/productimages/sku/s2904282-main-zoom.jpg?imwidth=3000',
      rating: 4,
      bought: '130',
      stock: 200,
      description:
        'Một bảng màu tạo khối (highlighter) đa năng, với các loại phấn dạng gel chứa sắc tố xà cừ siêu mịn, mang lại độ bắt sáng mạnh mẽ cho mặt, mắt và vùng cổ/ngực (décolleté)',
    },
    {
      brand: 'Dior',
      name: 'Son bóng Hydrating High-Shine Gloss',
      price: '420.000đ',
      image: 'https://www.sephora.com/productimages/sku/s2316222-main-zoom.jpg?imwidth=1224',
      rating: 3,
      bought: '1242',
      stock: 234,
      description:
        'Son môi bóng mượt, nuôi dưỡng và bảo vệ đôi môi, đồng thời làm nổi bật màu sắc tự nhiên của chúng. Với thành phần nổi bật là Dầu Anh Đào giúp bảo vệ môi khỏi các tác nhân gây khô và căng thẳng, sản phẩm sở hữu kết cấu giàu dưỡng chất và dễ chịu như son dưỡng (balmy), nhưng không bết dính hay nhờn rít, kết hợp độ bóng như gương của son bóng cùng sự thoải mái của liệu pháp chăm sóc môi chuyên sâu.',
    },
    {
      brand: 'Dior',
      name: 'Son bóng Addict Lip Maximizer Plumping',
      price: '580.000đ',
      image: 'https://www.sephora.com/productimages/sku/s2904274-main-zoom.jpg?imwidth=1224',
      rating: 2,
      bought: '272',
      stock: 197,
      description:
        'Son bóng làm đầy môi Dior Addict Lip Maximizer mang tính biểu tượng đã được cải tiến với công thức mới chứa 90% thành phần có nguồn gốc tự nhiên, cùng với thiết kế vỏ và các tông màu được cập nhật. Sản phẩm cam kết không chứa nhiều chất độc hại như sulfat, paraben, phthalate',
    },
    {
      brand: 'Dior',
      name: 'Kem nền Forever Skin Perfect 24H Multi-Use',
      price: '570.000đ',
      image: 'https://www.sephora.com/productimages/sku/s2882546-main-zoom.jpg?imwidth=1224',
      rating: 3,
      bought: '372',
      stock: 997,
      description:
        'Kem nền đa năng và cải tiến, mang lại lớp nền tự nhiên, hiệu ứng làm mờ lỗ chân lông (blurred finish), đồng thời cung cấp độ che phủ suốt 24 giờ cùng khả năng dưỡng ẩm cả ngày.',
    },
    {
      brand: 'Dior',
      name: 'Son bóng Addict Lip',
      price: '380.000đ',
      image: 'https://www.sephora.com/productimages/sku/s2830479-main-zoom.jpg?imwidth=630',
      rating: 4,
      bought: '712',
      stock: 137,
      description:
        'Son dưỡng ẩm với công thức kích hoạt pH mang tính biểu tượng, giúp mang lại đôi môi căng mọng, rạng rỡ và duy trì độ ẩm suốt 48 giờ',
    },
    {
      brand: 'Dior',
      name: 'Má hồng Rosy Glow',
      price: '530.000đ',
      image: 'https://www.sephora.com/productimages/sku/s2864734-main-zoom.jpg?imwidth=1224',
      rating: 5,
      bought: '234',
      stock: 724,
      description:
        'Phấn má hồng Dior Backstage Rosy Glow mang tính biểu tượng hiện nay được tích hợp công nghệ kích hoạt độ pH, cho phép tạo ra sắc độ má hồng độc đáo',
    },
    {
      brand: 'Dior',
      name: 'Kem nền Backstage',
      price: '450.000đ',
      image:
        'https://www.sephohttps://www.sephora.com/productimages/sku/s2669539-main-zoom.jpg?imwidth=1224ra.com/productimages/sku/s2864734-main-zoom.jpg?imwidth=1224',
      rating: 4,
      bought: '446',
      stock: 34,
      description:
        'Kem nền dưỡng ẩm có khả năng tăng cường độ che phủ tùy ý cho cả mặt và cơ thể, đồng thời có khả năng chống lại nhiệt độ và độ ẩm cao, mang lại lớp trang điểm rạng rỡ, bắt sáng.',
    },
    {
      brand: 'Dior',
      name: 'Son dưỡng Butter Hydrating Gloss',
      price: '390.000đ',
      image: 'https://www.sephora.com/productimages/sku/s2864726-main-zoom.jpg?imwidth=1224',
      rating: 5,
      bought: '846',
      stock: 343,
      description:
        'Son lai (hybrid) dạng bóng-dưỡng (gloss-balm) với kết cấu mềm mịn như bơ, cung cấp độ ẩm chuyên sâu cùng màu sắc nhẹ nhàng nhưng có độ bóng cao, hiện có sẵn trong năm tông màu tươi tắn',
    },
    {
      brand: 'Dior',
      name: 'Bảng phấn mắt Backstage',
      price: '550.000đ',
      image: 'https://www.sephora.com/productimages/sku/s2666022-main-zoom.jpg?imwidth=1224',
      rating: 3,
      bought: '418',
      stock: 433,
      description:
        'Bảng màu mắt tích hợp tất cả trong một, bao gồm cả kem lót mắt (primer) và tám sắc thái dễ tán, với các lớp hoàn thiện lì (matte) và lấp lánh',
    },
  ];
}
