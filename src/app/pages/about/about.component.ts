import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  isLoading: Boolean = false;

  constructor(private spinnerService: SpinnerService) {
    this.isLoading = this.spinnerService.isLoading();

    setTimeout(() => {
      this.isLoading = this.spinnerService.isNotLoading();
    }, 1000);
  }

  ngOnInit(): void {}
}
