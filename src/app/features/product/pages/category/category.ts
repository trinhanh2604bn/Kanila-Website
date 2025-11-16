import { Component } from '@angular/core';
import { ProductList } from '../../components/product-list/product-list';


@Component({
  selector: 'app-category',
  imports: [ProductList],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {

}
