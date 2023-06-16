import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Http1Service {

  constructor(private http: HttpClient) { }

  getReq(){
    return this.http.get('https://api.publicapis.org/entries')
}
}
