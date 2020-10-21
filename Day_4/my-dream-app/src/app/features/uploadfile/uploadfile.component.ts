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

  onFileUpload() {
    this.fileUploadService
      .postFile(this.fileToUpload)
      .subscribe((result: any) => {
        console.log(result['messagecode'], result['message'])
      })
  }
}