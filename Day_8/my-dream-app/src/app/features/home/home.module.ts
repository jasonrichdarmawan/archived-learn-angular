import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule,
  ],
  declarations: [HomeComponent, CalendarComponent],
})
export class HomeModule { }