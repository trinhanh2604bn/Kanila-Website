import { Component, inject, OnInit } from '@angular/core';
import {  ProductList } from '../../components/product-list/product-list';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  imports: [ProductList, RouterModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category{
//      data: any;
//      constructor(private httpClient: HttpClient) {}

//      ngOnInit(): void {
//        this.fetchData()

//       fetchData(){
//         this.httpClient
//         .get('http://localhost:5000/api/products')
//         .subscribe(( data : any) => console.log(data)
//         this.data = data )}
//      },
//      (error) => {
//         console.error('Lỗi khi lấy dữ liệu:', error);

// }
}

