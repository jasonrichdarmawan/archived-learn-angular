import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    UserRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }