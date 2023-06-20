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
    this.http.get('http://localhost:4600/posts').subscribe((data: any) => {
    console.log(data)  
    this.local = data;

    });
  }

}
