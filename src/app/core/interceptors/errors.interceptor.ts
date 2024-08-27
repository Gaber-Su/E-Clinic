import { HttpInterceptorFn } from '@angular/common/http';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Error intercepting run ! ......');
  
  return next(req);
};
