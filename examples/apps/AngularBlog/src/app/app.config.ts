import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DatePipe } from '@angular/common';

// Interceptors
import { apiUrlInterceptor } from './shared/interceptors/api-url.interceptor';
import { authInterceptor } from './shared/interceptors/auth.interceptor';

// Services
import { ArticleService } from './services/article/article.service';

// Infrastructure
import { ArticleFacade } from './infrastructure/article/articleFacade';
import { ArticleHttpFacade } from './infrastructure/article/articleHttpFacade';
import { ProductHttpFacade } from './infrastructure/product/productHttpFacade';
import { ProductFacade } from './infrastructure/product/productFacade';

// Query
import {
  provideAngularQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { Query } from './shared/third-party-lib/query';
import { queryFactory } from './shared/third-party-lib/tanStackQuery';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([apiUrlInterceptor, authInterceptor])),
    ArticleService,
    { provide: ArticleFacade, useClass: ArticleHttpFacade },
    { provide: ProductFacade, useClass: ProductHttpFacade },
    { provide: Query, useFactory: queryFactory },
    DatePipe,
    provideAngularQuery(new QueryClient()),
  ],
};
