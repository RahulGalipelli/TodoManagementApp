import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [NgIf, FormsModule]
})
export class LoginComponent {
  username = "RahulGalipelli"
  password = "dummy"
  errorMessage = "Invalid Credentials"
  invalidLogin = false;

  //Redirect to welcome page
  //Old- Angular.giveMeRouter
  //New- Dependency Injection
  constructor(private router: Router, public hardcodedservice: HardCodedAuthenticationService,public basicAuthService:BasicAuthenticationService) { }
  
  handleJWTAuthLogin(){
    this.basicAuthService.executeJWTAuthenticationService(this.username,this.password).subscribe({
      next: (data) => {
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error: (error) => {
        this.invalidLogin = true;
      },
      complete: () => {
      },
    });
  }
  handleBasicAuthLogin() {
    this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe({
      next: (data) => {
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error: (error) => {
        this.invalidLogin = true;
      },
      complete: () => {
      },
    });
  }
  handleLogin() {
    if (this.hardcodedservice.authenticatehardcode(this.username,this.password)) {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}

