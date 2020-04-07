import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignerComponent } from './designer/designer.component';
import { MakerComponent } from './maker/maker.component';

const routes: Routes = [
  {path: '/auth/maker', component: MakerComponent},
  {path: '/auth/designer', component: DesignerComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
