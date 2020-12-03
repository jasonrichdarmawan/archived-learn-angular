import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SubscribeService {
  baseurl = "http://localhost:8080/api/v1/subscribe/name"

  name: Subject<string>

  constructor(private httpClient: HttpClient) {
    this.name = new Subject<string>();
    console.log("SubscribeService initialized...")
  }

  subscribeName() {
    return this.httpClient.get(this.baseurl)
  }

}