// In-built modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components used in the routes
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'login', component: AuthComponent },
  // In case the route doesn't exist, redirect to the landing page
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
