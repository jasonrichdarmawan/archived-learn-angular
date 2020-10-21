import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class FileUploadService {
  // TODO: baseurl = environment.baseUrl
  baseurl = "https://api.demo.com/api/v1/"

  constructor(private httpClient: HttpClient) {
    console.log('FileUploadService Initialized...')
  }

  // TODO: refactor use formData.
  postFile(fileToUpload: File, endpoint: string) {
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(fileToUpload);
    let base64: string | ArrayBuffer = null;
    fileReader.onload = () => {
      base64 = fileReader.result
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json;,multipart/form-data;' })
      // TODO: .set('role', sessionStorage.getItem("role"))
      // TODO: .set('token', sessionStorage.getItem("token"))
      .set('role', "9")
      .set("token", "abcd")
    return this.httpClient.post(this.baseurl + endpoint, { 'file': base64 }, { headers: headers })
  }

}