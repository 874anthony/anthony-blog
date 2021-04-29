import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  // This method it's to check de /login params and filtering those events
  isLoggedIn(): Observable<any> {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot.routeConfig?.path)
    );
  }
}
