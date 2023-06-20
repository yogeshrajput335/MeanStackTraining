import { HttpClient } from "@angular/common/http";

export class HttpService {

  constructor(private http: HttpClient) { }

  httpGetRequest(){
    return this.http.get('https://api.publicapis.org/entries')
  }
}
