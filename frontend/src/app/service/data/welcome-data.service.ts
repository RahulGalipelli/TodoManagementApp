import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HardCodedAuthenticationService } from '../hard-coded-authentication.service';
import {map} from 'rxjs/operators';
export class HelloWorldBean{
  constructor(
    public message: String
  ){}
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {
  
  constructor(
    private http: HttpClient,
    private user: HardCodedAuthenticationService
  ) { }

  getWelcomeDataService(name: String){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'RahulGalipelli'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(username+':'+password);
  //   return basicAuthHeaderString
  // }

  //Access to XMLHttpRequest at 
  //'http://localhost:8080/hello-world/path-variable/RahulGalipelli' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
