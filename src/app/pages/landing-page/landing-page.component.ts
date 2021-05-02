import { Component } from '@angular/core';

// Services imported
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  // Loading flag
  isLoading: Boolean = false;

  constructor(private spinnerService: SpinnerService) {
    // Adding a loading manually. After 1.5 seconds it will disappear
    this.isLoading = this.spinnerService.isLoading();

    setTimeout(() => {
      this.isLoading = this.spinnerService.isNotLoading();
    }, 1500);
  }
}
