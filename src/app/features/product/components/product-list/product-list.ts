import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';


@Component({
  selector: 'app-product-list',
  imports: [SharedModule,ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

}
