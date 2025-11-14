import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core-module';
import { LayoutsModule } from './layouts/layouts-module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule, LayoutsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Kanila');
}
