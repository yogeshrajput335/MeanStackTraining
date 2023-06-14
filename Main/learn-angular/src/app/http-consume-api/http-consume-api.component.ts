import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-consume-api',
  templateUrl: './http-consume-api.component.html',
  styleUrls: ['./http-consume-api.component.css']
})
export class HttpConsumeApiComponent {
  local:any
  constructor(private http: HttpClient){
    this.http.get('https://api.publicapis.org/entries').subscribe((data: any) => {
      this.local = data;
    });
  }
}
