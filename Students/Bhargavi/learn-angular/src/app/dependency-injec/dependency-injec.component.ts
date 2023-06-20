import { Component } from '@angular/core';
import { HttpService } from '../services1/http.service';
import { Http1Service } from '../services1/http1.service';

@Component({
  selector: 'app-dependency-injec',
  templateUrl: './dependency-injec.component.html',
  styleUrls: ['./dependency-injec.component.css']
})
export class DependencyInjecComponent {
  _data:any;
  constructor(private srv : HttpService, private srv1 : Http1Service){
  //this.a = srv;
  }
  GetData(){
   this._data=''
   this.srv.httpGetRequest().subscribe((data:any)=>{
     this._data = data;
   })
  }

  GetData1(){
    this._data=''
    this.srv1.getReq().subscribe((data:any)=>{
      this._data = data;
    })
   }


}


