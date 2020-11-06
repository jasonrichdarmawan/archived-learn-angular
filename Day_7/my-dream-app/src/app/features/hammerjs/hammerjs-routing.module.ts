import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HammerJSComponent } from './hammerjs.component';

const routes: Routes = [
  {
    path: '',
    component: HammerJSComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HammerJSRoutingModule { }