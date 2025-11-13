import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollapsePanel } from '../../../../shared/components/collapse-panel/collapse-panel';

@Component({
  selector: 'app-account-sidebar',
  standalone: true,
  imports: [RouterModule, CollapsePanel],
  templateUrl: './account-sidebar.html',
  styleUrl: './account-sidebar.css',
})
export class AccountSidebar {

}
