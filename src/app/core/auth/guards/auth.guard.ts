import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('access_token');
  let router = new Router();
  if (token) {
    return true
  }
  else {
    router.navigate([''])
    return false
  }

};

