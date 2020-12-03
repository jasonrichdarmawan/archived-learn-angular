import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class FileDownloadService {
  baseurl = "http://localhost:8080/api/v1/csv"

  constructor(private httpClient: HttpClient) {
    console.log('FileUploadService Initialized...')
  }

  getFile() {
    let headers = new HttpHeaders({
      Authorization: 'Bearer 1',
    })
    headers = headers.set('Authorization', 'Bearer 23')

    return this.httpClient.get(this.baseurl, {headers: headers, responseType: 'blob'})
      .subscribe((response: any) => {
        if (response instanceof Blob) {
          let hiddenElement = document.createElement("a")
          hiddenElement.href = URL.createObjectURL(response)
          hiddenElement.download = "whitelisted.csv"
          hiddenElement.click()
          hiddenElement.remove()
        } else if (response instanceof Object) {
          window.location.href = response['href']
        } 
      })
  }
}