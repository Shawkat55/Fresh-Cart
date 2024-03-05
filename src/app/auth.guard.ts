import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authS= inject(AuthService);
  const routerS =inject(Router)
  if(authS.isLogin.getValue()===true){
    return true
  }else{
    
    routerS.navigate(['/login'])
    return false
  }


};
