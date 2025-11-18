import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community-page.html',
  styleUrl: './community-page.css',
})
export class CommunityPage {
constructor(private router: Router) {}
 goBlog(){this.router.navigate(['blog']);}
}
