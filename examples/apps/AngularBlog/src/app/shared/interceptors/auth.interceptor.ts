import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const APIkey = '900d7de163444fb388278e6e592af07b';

  const authReq = req.clone({
    headers: req.headers.set('x-api-key', APIkey),
  });
  return next(req.url.includes('products') ? req : authReq);
};
