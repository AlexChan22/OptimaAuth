import {inject} from '@angular/core';
import { Router } from '@angular/router';


 
export const authGuard = () => {

  const router = inject(Router);
 

      if (localStorage.getItem('token'))
      {
        return true;
      }  
      else {
        router.navigate([''], {queryParams: {returnUrl: router.url}});
        return false
      }
}
