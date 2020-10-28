import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [SearchRoutingModule, HttpClientModule, CommonModule],
  declarations: [SearchComponent]
})
export class SearchModule {}