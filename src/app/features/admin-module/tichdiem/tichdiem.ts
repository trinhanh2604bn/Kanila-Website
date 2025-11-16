import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tichdiem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tichdiem.html',
  styleUrls: ['./tichdiem.css']
})
export class Tichdiem {

  tiers = [
    {
      name: "Hạng Bạc",
      minOrdersEnabled: false,
      minOrders: null,
      minSpendEnabled: false,
      minSpend: null
    },
    {
      name: "Hạng Vàng",
      minOrdersEnabled: false,
      minOrders: null,
      minSpendEnabled: false,
      minSpend: null
    },
    {
      name: "Hạng Kim Cương",
      minOrdersEnabled: false,
      minOrders: null,
      minSpendEnabled: false,
      minSpend: null
    }
  ];

  saveData() {
    console.log("Saved tiers:", this.tiers);
    alert("Dữ liệu đã được lưu!");
  }
}
