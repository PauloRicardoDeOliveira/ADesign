import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutAd } from "./pages/about-ad/about-ad";
import { AboutDionathanGomes } from "./pages/about-dionathan-gomes/about-dionathan-gomes";

@Component({
  selector: 'app-root',
  imports: [Home, AboutAd, AboutDionathanGomes],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ADesign');
}
