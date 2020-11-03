import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule,
  ],
  declarations: [UserComponent, CalendarComponent],
})
export class UserModule { }