import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UploadFileComponent } from './uploadfile.component';

const routes: Routes = [
  {
    path: '',
    component: UploadFileComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule { }