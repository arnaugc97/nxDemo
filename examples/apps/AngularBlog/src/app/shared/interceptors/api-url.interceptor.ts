import { HttpInterceptorFn } from '@angular/common/http';

export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://newsapi.org/v2';

  const productsURL = 'https://dummyjson.com';

  const apiReq = req.clone({
    url: `${req.url.includes('products') ? productsURL : baseUrl}${req.url}`,
  });

  return next(apiReq);
};
