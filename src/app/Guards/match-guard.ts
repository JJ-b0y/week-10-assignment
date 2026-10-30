import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const matchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const isMatched = true;

  if (isMatched) {
    return true;
  } else {
    return !true;
  }
};
