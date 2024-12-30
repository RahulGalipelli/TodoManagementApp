import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticatehardcode(username: string,password:string){
    if (username === "RahulGalipelli" && password === "dummy") {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    } return false;


  }
  getUserNameharcode(){
    let user = sessionStorage.getItem('authenticatedUser')
    if(user!==null){
      return user;
    }
    return "null";
  }
  isUserLoggedInhardcode(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  logouthardcode(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }
}
