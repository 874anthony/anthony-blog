import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { VideosContainerComponent } from './videos-container/videos-container.component';
import { VideoCardComponent } from './video-card/video-card.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [VideosContainerComponent, VideoCardComponent],
  imports: [CommonModule, PipesModule],
  exports: [VideosContainerComponent, VideoCardComponent],
})
export class ComponentsModule {}
