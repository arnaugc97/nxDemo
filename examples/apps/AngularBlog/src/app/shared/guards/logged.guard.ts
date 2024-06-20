import { CanActivateFn } from '@angular/router';

export const loggedGuard: CanActivateFn = () => {
  return true;
};
