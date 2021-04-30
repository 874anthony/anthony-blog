import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { VideosContainerComponent } from './videos-container/videos-container.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { SpinnerComponent } from './spinner/spinner.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    VideosContainerComponent,
    VideoCardComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, PipesModule],
  exports: [VideosContainerComponent, VideoCardComponent, SpinnerComponent],
})
export class ComponentsModule {}
