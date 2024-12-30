import { AbstractType, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export class MyData{
  constructor(
    public myCheckbox: boolean
  ){}
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {  
  
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService,
    private fb: FormBuilder,
    private httpClient: HttpClient
    
  ){}
  name = ''
  messageFromService:String = ''
  errorMessageFromService:String = ""
  showDescription:boolean = true;
  ngOnInit(): void {
      this.name = this.route.snapshot.params['name'];
  }
  // onSave() {
      
  //   // Send data to the backend
  //   this.httpClient.post<MyData>('http://localhost:8080/api/save', this.myForm.getRawValue()).subscribe(
  //     (response:MyData) => {
  //       console.log('Response:', response);
  //     },

  //   );
  // }
  getWelcomeMessage() {
    this.showDescription = false;
    this.service.getWelcomeDataService(this.name).subscribe({
      next: (data) => 
        {this.getSuccessfulResponse(data);}
      ,
      error: (error) => {
        this.handleErrorMesssage(error);
      },
      complete: () => {
      }
    }); 
  }

  getSuccessfulResponse(response: HelloWorldBean){
    this.messageFromService = response.message;
  }

  handleErrorMesssage(error: any){
    this.errorMessageFromService = error.error.message;
  }
  
}
