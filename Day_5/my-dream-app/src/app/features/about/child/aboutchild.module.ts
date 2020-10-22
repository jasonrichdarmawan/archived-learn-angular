import { NgModule } from '@angular/core';

import { AboutChildRoutingModule } from './aboutchild-routing.module';
import { AboutChildComponent } from './aboutchild.component';

@NgModule({
  imports: [
    AboutChildRoutingModule,
  ],
  declarations: [AboutChildComponent]
})
export class AboutChildModule { }