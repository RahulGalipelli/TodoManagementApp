import { Component } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { ActivatedRoute } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
    isUserLoggedIn: boolean = false;
    constructor(public hardcodedauth:HardCodedAuthenticationService,public basicAuth:BasicAuthenticationService,public route:ActivatedRoute){

    }
    name:String = ""
    ngOnInit(){
      this.name = this.basicAuth.getBasicAuthenticatedUserName();
      this.isUserLoggedIn = this.basicAuth.isUserLoggedIn();
    }
}
