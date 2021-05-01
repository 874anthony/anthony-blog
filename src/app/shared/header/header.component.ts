// In-built imports
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Flags variables
  isInLoginPage: Boolean = false;
  isInAboutPage: Boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    /* Here it subscribes to the observable returned from the AuthService, and evaluate the data
    that is coming.*/

    this.authService.isLoggedIn().subscribe((data) => {
      switch (data) {
        case 'login':
          this.isInLoginPage = true;
          break;

        case 'about-me':
          this.isInAboutPage = true;
          break;
      }
    });
  }

  scrollToTop() {
    // This method is the smooth scrolling
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  navbarBrandToggle() {
    // This method what it does its to navigate back to landing page in case you're in the other view.
    if (this.isInLoginPage || this.isInAboutPage) {
      this.router.navigateByUrl('/');
    } else {
      this.scrollToTop();
    }
  }
}
