import { Route } from '@angular/router';
import { loggedGuard } from './shared/guards/logged.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./presentation/auth/auth.routes').then((m) => m.AUTH_ROUTES),
    canActivate: [loggedGuard],
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./presentation/articles/articles.routes').then(
        (m) => m.ARTICLES_ROUTES
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./presentation/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
];
