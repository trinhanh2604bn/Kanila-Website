// interface/product.ts (Đảm bảo cấu trúc này)

export interface Product {
    [x: string]: any;
    _id: string; // ID của MongoDB
    brandId: string; // Hoặc Brand object nếu populate
    categoryId: string; // Hoặc Category object

    productName: string;
    price: number;
    averageRating: number;

    imageUrl: string; // Tên trường hình ảnh
    highlight: any; // Mixed type

    description: string;
    // ... các trường khác

    stock: number;
    bought: number;
    isActive: boolean;

    createdAt: string;
    updatedAt: string;
}
