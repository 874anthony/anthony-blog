// Built-in modules
import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

// Rxjs extensions to manipulate the data
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  /* This method it's to check the params based on the current route and filter the events
  that are emitted. Returns an Observable that we can subscribe. */

  isLoggedIn(): Observable<any> {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot.routeConfig?.path)
    );
  }
}
