import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  // Loading flag
  isLoading: Boolean = false;

  constructor(private spinnerService: SpinnerService) {
    // Adding a loading manually. After 2 seconds it will disappear
    this.isLoading = this.spinnerService.isLoading();

    setTimeout(() => {
      this.isLoading = this.spinnerService.isNotLoading();
    }, 2000);
  }

  ngOnInit(): void {}
}
