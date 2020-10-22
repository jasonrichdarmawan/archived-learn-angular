import { HttpResponse } from '@angular/common/http';
import { Component } from "@angular/core";
import { FileUploadService } from 'src/app/services/fileupload.service';

@Component({
  selector: 'uploadfile',
  templateUrl: './uploadfile.component.html',
  providers: [FileUploadService]
})
export class UploadFileComponent {
  fileToUpload: File = null;

  constructor(private fileUploadService: FileUploadService) { }

  onFileInput(files: FileList) {
    this.fileToUpload = files.item(0)
  }

  async onFileUpload() {
    (await this.fileUploadService
      .postFile(this.fileToUpload, "uploadfile"))
      .subscribe((response: HttpResponse<String>) => {
        if (response.body === "OK") {
          // TODO: do Something
        } else {
          // error
        }
        console.log(response.headers.keys(), response.body['message'])
      })
  }
}