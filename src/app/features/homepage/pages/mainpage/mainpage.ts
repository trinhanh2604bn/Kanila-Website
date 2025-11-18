
import { Silder } from '../../components/silder/silder';
import { Divider } from '../../components/divider/divider';
import { Component } from '@angular/core';
import { Bfslider } from '../../components/bfslider/bfslider';
import { Brand} from '../../components/brand/brand';
import { Roya } from '../../components/roya/roya';
import { ProductSlider } from '../../components/product-slider/product-slider';
import { Header } from '../../../../layouts/main-layout/header/header';
import { Footer } from '../../../../layouts/main-layout/footer/footer';
import { Router } from '@angular/router';




@Component({
  selector: 'app-mainpage',
  imports: [Silder, Divider, Bfslider, Brand, Roya, ProductSlider, ProductSlider, Header, Footer],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage {
[x: string]: any;
constructor(private router: Router) {}
goCategory(){this.router.navigate(['category']);}
goCommunity(){this.router.navigate(['communitypage']);}
gOvlp(){this.router.navigate(['ovlp']);}

}
