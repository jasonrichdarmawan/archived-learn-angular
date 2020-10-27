import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'about/:id',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'hammerjs',
    loadChildren: () => import('./features/hammerjs/hammerjs.module').then(m => m.HammerJSModule)
  },
  {
    path: 'uploadfile',
    loadChildren: () => import('./features/uploadfile/uploadfile.module').then(m => m.UploadFileModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
