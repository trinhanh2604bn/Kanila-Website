import { Component } from '@angular/core';
import { ItemCart } from "../item-cart/item-cart";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [ItemCart, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

}
