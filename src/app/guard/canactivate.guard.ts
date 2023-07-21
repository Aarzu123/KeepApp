import { CanActivateFn, Router } from '@angular/router';

import { Inject, Injectable, inject } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { RouterService } from '../service/router.service';

export const canactivateGuard: CanActivateFn = 
(route, state):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => 
{
  var mystatus:boolean=false;
  const authservice:AuthService = inject(AuthService);
  const routerservice:RouterService = inject(RouterService);

  const bearerToken = localStorage.getItem("bearerToken");

      if(bearerToken != null)
      {
        const authStatus:boolean = authservice.isUserAuthenticated(bearerToken);

        console.log("Auth Status in Guard "+authStatus);
       
        if(authStatus)
        {
          console.log("Data ..");
          mystatus=true;
        }
      }
      else
      {
        routerservice.routeToLogin();
        mystatus=false;
      }

      console.log(mystatus);
      return mystatus;
  
};
