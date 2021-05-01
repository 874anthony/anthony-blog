// In-built modules
import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { VideoCardComponent } from './video-card/video-card.component';

// Components exported.
import { VideosContainerComponent } from './videos-container/videos-container.component';
import { PlayersContainerComponent } from './players-container/players-container.component';
import { SpinnerComponent } from './spinner/spinner.component';

// Pipes imported
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
