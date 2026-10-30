import { CanActivateChildFn } from '@angular/router';

export const opportunitiesChildGuard: CanActivateChildFn = (childRoute, state) => {
  const isAuth = true;
  return isAuth;
};
