import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { Token } from '@angular/compiler';
export const TOKEN = 'token';
export const AUTHENTICATEDUSER = 'authenticatedUser';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  executeJWTAuthenticationService(username: string, password: string) {
    
    return this.http.post<any>(`${API_URL}/authenticate`, { username,password }).pipe(
      map((data) => {
        // Store username and token in session storage
        sessionStorage.setItem(AUTHENTICATEDUSER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
        return data;
      })
    );
  }

  /**
   * Executes authentication service by sending a GET request with Basic Authentication.
   */
  executeAuthenticationService(username: string, password: string) {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers }).pipe(
      map((data) => {
        // Store username and token in session storage
        sessionStorage.setItem(AUTHENTICATEDUSER, username);
        sessionStorage.setItem(TOKEN, basicAuthHeaderString);
        return data;
      })
    );
  }

  /**
   * Retrieves the authenticated username from session storage.
   */
  getBasicAuthenticatedUserName(): any {
    const user = sessionStorage.getItem(AUTHENTICATEDUSER);
    return user ? user : null; // Use null instead of "null" string for proper checks
  }

  /**
   * Retrieves the Basic Authentication token from session storage.
   */
  getBasicAuthenticatedToken(): any {
    const user = this.getBasicAuthenticatedUserName();
    if (user) {
      const token = sessionStorage.getItem(TOKEN);
      return token ? token : null;
    }
    return null;
  }

  /**
   * Checks if a user is logged in by verifying session storage.
   */
  isUserLoggedIn(): boolean {
    return this.getBasicAuthenticatedUserName() !== null;
  }

  /**
   * Logs out the user by removing data from session storage.
   */
  logout(): void {
    sessionStorage.removeItem(AUTHENTICATEDUSER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
