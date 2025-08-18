import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = 'Bearer my-secret-token';

  const clonedReq = req.clone({
    setHeaders: {
      Authorization: authToken
    }
  });

  console.log('Request:', clonedReq);

  return next(clonedReq);
  //return next(req);
};
