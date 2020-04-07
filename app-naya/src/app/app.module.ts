import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {routing} from "./app.routing";
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DesignerComponent } from './auth/designer/designer.component';
import { MakerComponent } from './auth/maker/maker.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    MakerComponent
  ],
  imports: [
    routing,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
