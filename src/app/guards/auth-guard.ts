import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);

  let LoggedIn = sessionStorage.getItem('loggedIn')
  if(LoggedIn === 'true'){
  return true;
  }
  else{
    alert('Please login');
    _router.navigate(['login']);
    return false;
  }
};
