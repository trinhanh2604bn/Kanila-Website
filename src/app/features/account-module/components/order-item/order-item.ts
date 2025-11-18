import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-item.html',
  styleUrl: './order-item.css',
})
export class OrderItem {
constructor(private router: Router) {}
 goProductdetail(){this.router.navigate(['detail/:slug']);}
}
