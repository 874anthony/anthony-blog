// In-built modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes exported
import { DomSanitizerPipe } from './dom-sanitizer.pipe';

@NgModule({
  declarations: [DomSanitizerPipe],
  imports: [CommonModule],
  exports: [DomSanitizerPipe],
})
export class PipesModule {}
