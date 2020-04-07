import { Component, OnInit } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";


@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.css']
})
export class MakerComponent implements OnInit {

    ngOnInit(): void {
  }

  email :String;
  password : String;
  capacity: String;
  material : String;
  location :String;
  form:any;
  apiRoot: string = "localhost:8080";

  constructor(private http: HttpClient) {}

  onFormSubmit(form)
  {
       console.log(form.value)
      this.email = form.value.email;
      this.password = form.value.password;
      this.capacity = form.value.capacity;
      this.material = form.value.material;
      this.location = form.value.location;
      
      let url = "http://localhost:8080/api/maker"
      

    this.http
      .post(url,{"email":this.email,"password":this.password,"capacity":this.capacity,"material":this.material,"location":this.location})
      .subscribe(res => console.log(res));
  }
}
