import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthService:BasicAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    let basicAuthHeaderString = this.basicAuthService.getBasicAuthenticatedToken();
    let username = this.basicAuthService.getBasicAuthenticatedUserName();

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      })
    }

    return next.handle(request);
    
  }
}
