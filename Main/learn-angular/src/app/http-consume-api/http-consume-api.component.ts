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
    this.http.get('http://localhost:4600/posts').subscribe((data: any) => {
    console.log(data)  
    this.local = data;
    });
  }
}
