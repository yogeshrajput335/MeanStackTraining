import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-apitemplate',
  templateUrl: './apitemplate.component.html',
  styleUrls: ['./apitemplate.component.css']
})
export class APItemplateComponent {
  local:any
  constructor(private http: HttpClient){
    this.http.get('https://api.publicapis.org/entries').subscribe((data: any) => {
      this.local = data;
    });
  }

}
