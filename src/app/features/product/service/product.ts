import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';  // Import giao diện Product

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';  // URL của API backend

  constructor(private http: HttpClient) {}

  // Lấy tất cả sản phẩm
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);  // Gửi GET request tới backend
  }

  // Lấy chi tiết sản phẩm theo ID
  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);

    // Gửi GET request với ID sản phẩm
  }

  getProductBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${slug}`);
  }
}
