import { Component, OnInit } from '@angular/core';

// Services
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  isLoading: Boolean = false;
  constructor(private spinnerService: SpinnerService) {
    this.isLoading = this.spinnerService.isLoading();

    setTimeout(() => {
      this.isLoading = this.spinnerService.isNotLoading();
    }, 1500);
  }

  ngOnInit(): void {}
}
