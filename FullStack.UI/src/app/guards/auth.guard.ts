import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  const toast = inject(NgToastService);

  if(token){
    return true;
  }else{
    toast.warning({detail:"WARNING",summary:'Please Login to get access!',duration:5000});
    router.navigateByUrl('login');
    return false;
  }

};
