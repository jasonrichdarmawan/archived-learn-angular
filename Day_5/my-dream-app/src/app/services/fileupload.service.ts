import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class FileUploadService {
  // TODO: baseurl = environment.baseUrl
  baseurl = "http://localhost:8080/api/v1/csv"

  constructor(private httpClient: HttpClient) {
    console.log('FileUploadService Initialized...')
  }

  readFileAsync(fileToUpload: File) {
    return new Promise<String | ArrayBuffer>((resolve, reject) => {
      let fileReader = new FileReader()

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = reject;

      fileReader.readAsDataURL(fileToUpload);
    })
  }

  // TODO: refactor use formData.
  async postFile(fileToUpload: File, endpoint: string) {
    const readAsText: String | ArrayBuffer = await this.readFileAsync(fileToUpload)
    let headers = new HttpHeaders({
      Authorization: 'Bearer 1',
    })
    headers = headers.set('Authorization', 'Bearer 23')
    return this.httpClient.post(this.baseurl, { file: readAsText }, { headers: headers, observe: 'response' })
  }

}