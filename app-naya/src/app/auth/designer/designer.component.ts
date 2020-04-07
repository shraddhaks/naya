import { Component, OnInit } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {


  ngOnInit(): void {
  }

  email :String;
  password : String;
  capacity: String;
  type_of_designer : String;
  training :String;
  form:any;

  constructor(private http: HttpClient) {}

  onFormSubmit(form)
  {
       console.log(form.value)
      this.email = form.value.email;
      this.password = form.value.password;
      this.capacity = form.value.capacity;
      this.type_of_designer = form.value.type_of_designer;
      this.training = form.value.training;
      
      let url = "http://localhost:8080/api/designer"
      

    this.http
      .post(url,{"email":this.email,"password":this.password,"capacity":this.capacity,"type_of_designer":this.type_of_designer,"training":this.training})
      .subscribe(res => console.log(res));
  }
}
