import { Injectable, NgModule } from "@angular/core";

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { HammerJSRoutingModule } from './hammerjs-routing.module';
import { HammerJSComponent } from './hammerjs.component';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL }
  }
}

@NgModule({
  imports: [
    HammerJSRoutingModule,
  ],
  declarations: [HammerJSComponent],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ]
})
export class HammerJSModule { }