import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AuthComponent } from './auth.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, SharedModule, PagesModule],
  exports: [AuthComponent],
})
export class AuthModule {}