import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  local:any
  constructor(private http: HttpClient){
    this.http.get('https://api.publicapis.org/entries').subscribe((data: any) => {
      this.local = data;
    });
  }

}
