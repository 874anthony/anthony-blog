import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { LandingPageComponent } from './landing-page/landing-page.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, SharedModule, ComponentsModule, RouterModule],
  exports: [],
})
export class PagesModule {}
