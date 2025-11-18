

import { Component } from '@angular/core';
import { Header } from './header/header';
import {  Sidebar } from './sidebar/sidebar';
import { RouterLink, RouterOutlet, } from '@angular/router';


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [Header, Sidebar, RouterOutlet, RouterLink], 
  templateUrl: './admin-layout.html',
  styleUrls: ['./admin-layout.css']
})
export class AdminLayout {
  
}

//