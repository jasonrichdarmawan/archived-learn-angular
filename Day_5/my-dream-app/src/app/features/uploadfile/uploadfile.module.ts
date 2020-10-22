import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { UploadFileRoutingModule } from './uploadfile-routing.module';
import { UploadFileComponent } from './uploadfile.component';

@NgModule({
  imports: [
    UploadFileRoutingModule,
    HttpClientModule
  ],
  declarations: [UploadFileComponent]
})
export class UploadFileModule { }