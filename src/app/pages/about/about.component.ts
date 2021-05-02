import { Component } from '@angular/core';

// Importing Services
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  // Loading flag
  isLoading: Boolean = false;

  constructor(private spinnerService: SpinnerService) {
    // Adding a loading manually. After 1 second it will disappear
    this.isLoading = this.spinnerService.isLoading();

    setTimeout(() => {
      this.isLoading = this.spinnerService.isNotLoading();
    }, 1000);
  }
}
