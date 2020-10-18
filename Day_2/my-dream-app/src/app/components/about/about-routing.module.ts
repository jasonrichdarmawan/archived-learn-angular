import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';

import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'child',
        loadChildren: () => import('./child/aboutchild.module').then(m => m.AboutChildModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
