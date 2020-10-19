import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutChildComponent } from './aboutchild.component';

const routes: Routes = [
  {
    path: '',
    component: AboutChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutChildRoutingModule { }
