import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { VideosContainerComponent } from './videos-container/videos-container.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PlayersContainerComponent } from './players-container/players-container.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    VideosContainerComponent,
    VideoCardComponent,
    SpinnerComponent,
    PlayersContainerComponent,
  ],
  imports: [CommonModule, PipesModule],
  exports: [
    VideosContainerComponent,
    PlayersContainerComponent,
    SpinnerComponent,
  ],
})
export class ComponentsModule {}
