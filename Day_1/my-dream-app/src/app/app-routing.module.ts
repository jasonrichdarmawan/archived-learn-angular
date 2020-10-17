import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'about/:id',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
