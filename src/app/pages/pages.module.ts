import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { LandingPageComponent } from './landing-page/landing-page.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [LandingPageComponent, AboutComponent],
  imports: [CommonModule, SharedModule, ComponentsModule, RouterModule],
  exports: [],
})
export class PagesModule {}
