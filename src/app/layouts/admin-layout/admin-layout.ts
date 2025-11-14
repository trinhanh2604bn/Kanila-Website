import { Component } from '@angular/core';
import { SidebarMenu } from '../sidebar-menu/sidebar-menu';  // Nhập khẩu SidebarMenu
import { Points } from '../../features/profile/points/points'
import {Discount} from '../../features/profile/discount/discount'
import {Favorite} from '../../features/profile/favorite/favorite'
import { Address } from '../../features/profile/address/address'


@Component({
  selector: 'app-admin-layout',
  standalone: true,  // Đánh dấu AdminLayout là standalone
  imports: [SidebarMenu, Points, Discount, Favorite, Address ],  // Nhập khẩu Header, SidebarMenu và Points
  templateUrl: './admin-layout.html',
  styleUrls: ['./admin-layout.css']
})
export class AdminLayout {
  // Logic của component AdminLayout
}
