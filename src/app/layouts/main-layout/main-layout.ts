import { Component } from '@angular/core';
import { Footer } from '../../core/footer/footer';
import { Header } from '../../core/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Footer, RouterOutlet, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
