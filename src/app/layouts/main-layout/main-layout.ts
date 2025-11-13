import { Component } from '@angular/core';
import { Footer } from '../../core/footer/footer';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../core/header/header';

@Component({
  selector: 'app-main-layout',
  imports: [Footer, RouterOutlet, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
