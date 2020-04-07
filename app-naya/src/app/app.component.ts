import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isvisible=true;
  isMaker=false;
  isDesigner=false;
  constructor(private router:Router){}

  MakerPage = function () {
    this.isMaker=true;
    this.isvisible=false;
    
};
DesignerPage = function () {
  this.isDesigner=true;
    this.isvisible=false;
};
}
