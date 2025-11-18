import { Component } from '@angular/core';
import { OverlayPreference1Component } from "../../../account-module/components/overlay-preference1/overlay-preference1";
import { Mainpage } from '../mainpage/mainpage';

@Component({
  selector: 'app-main-page-overlay',
  imports: [OverlayPreference1Component, Mainpage],
  templateUrl: './main-page-overlay.html',
  styleUrl: './main-page-overlay.css',
})
export class MainPageOverlay {

}
