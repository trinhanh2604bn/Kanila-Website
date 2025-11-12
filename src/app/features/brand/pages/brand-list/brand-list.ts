import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../../../../shared/components/filter/filter';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './brand-list.html',
  styleUrls: ['./brand-list.css'],
})
export class BrandListComponent {
  alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  activeLetter: string | null = null;

  brands: { [key: string]: string[] } = {
    A: ['Ami Cole', 'Armani Beauty', 'ABH'],
    B: ['Basma', 'Beautyblender', 'Bobbi Brown'],
    C: ['Charlotte Tilbury', 'Clarins', 'Clinique'],
    D: ['Dior'],
    F: ['Fenty Beauty', 'Freck Beauty'],
    G: ['Givenchy', 'Glossier', 'Grande Cosmetics'],
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

  onSelectLetter(letter: string) {
    this.activeLetter = letter;
    const target = document.getElementById(letter);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
