import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule // only happens to @angular/core ^9. see: https://levelup.gitconnected.com/making-hammerjs-work-with-angular-9-81d289159320
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
