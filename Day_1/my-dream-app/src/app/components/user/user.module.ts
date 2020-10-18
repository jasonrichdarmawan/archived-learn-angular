import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }