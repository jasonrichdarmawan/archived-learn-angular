import { NgModule } from "@angular/core";

import { HammerJSRoutingModule } from './hammerjs-routing.module';
import { HammerJSComponent } from './hammerjs.component';

@NgModule({
  imports: [
    HammerJSRoutingModule,
  ],
  declarations: [HammerJSComponent],
})
export class HammerJSModule { }