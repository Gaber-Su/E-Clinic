import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(' headersInterceptor running! .... ', req , next);
  
  // To Do ...
  // set token here 
//  const authReq =  req.clone({
//    setHeaders : {'Access-Control-Allow-Origin' : 'http://localhost:4200', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'},

//   })
  
  return next(req);
};
