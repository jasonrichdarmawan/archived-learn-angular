import { HttpResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from "@angular/core";
import { FileDownloadService } from 'src/app/services/filedownload.service';
import { FileUploadService } from 'src/app/services/fileupload.service';

@Component({
  selector: 'uploadfile',
  templateUrl: './uploadfile.component.html',
  providers: [FileUploadService, FileDownloadService]
})
export class UploadFileComponent {
  @ViewChild("file")
  fileElementRef: ElementRef

  fileToUpload: File = null;

  constructor(private fileUploadService: FileUploadService, private fileDownloadService: FileDownloadService) { }

  onFileInput(files: FileList) {
    // e.g: sheet1.csv => "csv" === "csv"
    if (files.item(0).name.split('.').pop() === "csv") {
      this.fileToUpload = files.item(0)
    } else {
      this.fileElementRef.nativeElement.value = ""
    }
  }

  // TODO: security implementation?
  // 1. How to wait for Response Headers before sending the file?
  onFileUpload() {
    this.fileUploadService
      .postFile(this.fileToUpload, "")
      .subscribe((response: HttpResponse<String>) => {
        if (response.body === "OK") {
          // TODO: do Something
        } else {
          // error
        }
        this.fileElementRef.nativeElement.value = ""
        this.fileToUpload = null
        console.log(response.headers.keys(), response.body['message'])
      })
  }

  onDownloadRequest() {
    this.fileDownloadService
      .getFile()
  }
}