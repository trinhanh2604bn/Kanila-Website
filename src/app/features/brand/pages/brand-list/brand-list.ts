import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FilterComponent } from '../../../../shared/components/filter/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './brand-list.html',
  styleUrls: ['./brand-list.css'],
})
export class BrandListComponent implements AfterViewInit {
  alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  activeLetter: string | null = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // ❗ CHỈ CHẠY TRÊN TRÌNH DUYỆT — KHÔNG CHẠY KHI SSR
    if (!isPlatformBrowser(this.platformId)) return;

    const headerEl = document.querySelector('app-header') as HTMLElement | null;
    const alphabetEl = document.querySelector('.alphabet-nav') as HTMLElement | null;

    const headerHeight = headerEl?.getBoundingClientRect().height || 0;
    const alphabetHeight = alphabetEl?.getBoundingClientRect().height || 0;

    const offset = headerHeight + alphabetHeight + 8;

    document.documentElement.style.setProperty('--brand-scroll-offset', `${offset}px`);
  }

  /** ⭐ Dữ liệu brand */
  brands: { [key: string]: string[] } = {
    A: ['Ami Cole', 'Armani Beauty', 'ABH', 'Artist Couture'],
    B: ['Basma', 'Beautyblender', 'Bobbi Brown'],
    C: ['Charlotte Tilbury', 'Clarins', 'Clinique'],
    D: ['Dior'],
    F: ['Fenty Beauty', 'Freck Beauty'],
    G: ['Givenchy', 'Glossier', 'Grande Cosmetics', 'Gucci', 'Guerlain'],
    H: ['Haus Labs', 'Hourglass'],
    I: ['IT Cosmetics'],
    K: ['Kosas', 'Kulfi'],
    L: ['Lancôme'],
    M: ['Make Up For Ever', 'Makeup By Mario', 'Melt Cosmetics', 'Merit', 'Milk Makeup'],
    N: ['Nars', 'Natasha Denona'],
    P: ['Pat McGrath Labs', 'Patrick Ta'],
    S: ['Shiseido', 'Shu Uemura', 'Sulwhasoo'],
    T: ['Tarte', 'Too Faced', 'Tower 28 Beauty'],
    Y: ['Yves Saint Laurent'],
  };

  /** ⭐ Scroll */
  onSelectLetter(letter: string) {
    this.activeLetter = letter;

    if (!isPlatformBrowser(this.platformId)) return;

    const target = document.getElementById(letter);
    if (!target) return;

    const headerHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--brand-scroll-offset').trim()
    );

    const absoluteY = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: absoluteY,
      behavior: 'smooth',
    });
  }

  /** ⭐ Chuyển qua brand catalog */
  goToBrandCatalog(brandName: string) {
    const slug = brandName.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/brand-catalog', slug]);
  }
}
