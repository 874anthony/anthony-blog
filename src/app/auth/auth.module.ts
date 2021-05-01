// In-built modules used
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components exported
import { AuthComponent } from './auth.component';

// Modules imported
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, SharedModule, PagesModule, ComponentsModule],
  exports: [AuthComponent],
})
export class AuthModule {}
