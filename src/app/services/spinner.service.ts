// Built-in module import
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  loading: Boolean = false;

  constructor() {}

  isLoading(): Boolean {
    return (this.loading = true);
  }

  isNotLoading(): Boolean {
    return (this.loading = false);
  }
}
