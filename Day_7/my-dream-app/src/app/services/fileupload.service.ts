import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FileUploadService {
  // TODO: baseurl = environment.baseUrl
  baseurl = "http://localhost:8080/api/v1/csv"

  constructor(private httpClient: HttpClient) {
    console.log('FileUploadService Initialized...')
  }

  /**
   * 
   * @param fileToUpload 
   * @deprecated use formData.
   */
  readFileAsync(fileToUpload: File) {
    return new Promise<String | ArrayBuffer>((resolve, reject) => {
      let fileReader = new FileReader()

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = reject

      fileReader.readAsDataURL(fileToUpload)
    })
  }

  // refactored with formData.
  postFile(fileToUpload: File, endpoint: string) {
    // const readAsText: String | ArrayBuffer = await this.readFileAsync(fileToUpload)

    const formData: FormData = new FormData()
    formData.append('file', fileToUpload, fileToUpload.name)

    let headers = new HttpHeaders({
      Authorization: 'Bearer 1',
    })
    headers = headers.set('Authorization', 'Bearer 23')

    return this.httpClient.post(this.baseurl + endpoint, formData, { headers: headers, observe: 'response' })
  }

}