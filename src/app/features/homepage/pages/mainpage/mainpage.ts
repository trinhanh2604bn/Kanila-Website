
import { Silder } from '../../components/silder/silder';
import { Divider } from '../../components/divider/divider';
import { Component } from '@angular/core';
import { Bfslider } from '../../components/bfslider/bfslider';
import { Brand} from '../../components/brand/brand';
import { Roya } from '../../components/roya/roya';




@Component({
  selector: 'app-mainpage',
  imports: [Silder, Divider, Bfslider, Brand, Roya],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage {
[x: string]: any;

}
