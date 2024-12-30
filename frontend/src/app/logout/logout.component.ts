import { Component } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(public hardcodedauth:HardCodedAuthenticationService,public basicAuth:BasicAuthenticationService){


  }

  ngOnInit(){
    this.hardcodedauth.logouthardcode();
    //this.hardcodedauth.logout();
  }
}
