import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {AboutChildComponent} from './components/aboutchild.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'child',
        component: AboutChildComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
