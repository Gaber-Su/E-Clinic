import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(' headersInterceptor running! .... ', req , next);
  
  // To Do ...
  // set token here 
 const authReq =  req.clone({
   setHeaders : {Authorization : 'Bearer Token '}
  })
  
  return next(authReq);
};
