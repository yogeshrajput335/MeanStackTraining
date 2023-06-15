import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consume-api',
  templateUrl: './consume-api.component.html',
  styleUrls: ['./consume-api.component.css']
})
export class ConsumeApiComponent {
  local:any
  constructor(private http: HttpClient){
    this.http.get('https://api.publicapis.org/entries').subscribe((data: any) => {
      this.local = data;
    });
  }
}
