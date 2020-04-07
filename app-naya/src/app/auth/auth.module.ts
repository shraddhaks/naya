import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { DesignerComponent } from './designer/designer.component';
import { MakerComponent } from './maker/maker.component';

@NgModule({
  declarations: [
    DesignerComponent,
    MakerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
