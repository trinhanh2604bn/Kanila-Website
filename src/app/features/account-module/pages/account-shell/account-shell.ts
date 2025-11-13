import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountSidebar } from '../../components/account-sidebar/account-sidebar';

@Component({
  selector: 'app-account-shell',
  standalone: true,
  imports: [AccountSidebar, RouterOutlet],
  templateUrl: './account-shell.html',
  styleUrl: './account-shell.css',
})
export class AccountShell {}
