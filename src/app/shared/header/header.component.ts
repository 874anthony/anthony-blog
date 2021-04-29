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
  // Flag variable
  isInLoginPage: Boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    // Here it's to make sure we are in login listening to Activated Route
    this.authService.isLoggedIn().subscribe((data) => {
      if (data === 'login') {
        this.isInLoginPage = true;
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
    // This method what it does its to navigate back to landing page in case you're in the Login Page.
    if (this.isInLoginPage) {
      this.router.navigateByUrl('/');
    } else {
      this.scrollToTop();
    }
  }
}
