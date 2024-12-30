import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  constructor(
    private router: Router,
    private basicAuth: BasicAuthenticationService
  ) { }

  canActivate(){
    if(this.basicAuth.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
