import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    // ❌ KHÔNG KHAI BÁO Standalone Component Ở ĐÂY
  ],
  imports: [CommonModule],
  exports: [
    CommonModule, // export để module khác dùng structural directives (*ngIf, *ngFor)
  ],
})
export class SharedModule {}
