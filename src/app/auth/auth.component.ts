import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoading: Boolean = false;

  constructor(private spinnerService: SpinnerService) {
    this.isLoading = this.spinnerService.isLoading();
    console.log(this.isLoading);

    setTimeout(() => {
      this.isLoading = this.spinnerService.isNotLoading();
    }, 2000);
  }

  ngOnInit(): void {}
}
