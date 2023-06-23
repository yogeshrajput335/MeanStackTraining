import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Http1Service } from '../services/http1.service';

@Component({
  selector: 'app-dependency-injec',
  templateUrl: './dependency-injec.component.html',
  styleUrls: ['./dependency-injec.component.css']
})
export class DependencyInjecComponent {
  _data:any;

  nodeapidata:any;
  bookName=''
  bookId=0
  msg=''

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

  CallNodeApi1(){
    this.srv.CallNodeAPI1().subscribe(data=>{
      this.nodeapidata = data;
    });
   }
   CallNodeApi2(){
    this.srv.CallNodeAPI2().subscribe(data=>{
      this.nodeapidata = data;
    });
   }
   GetBooks(){
    this.srv.GetBooks().subscribe(data=>{
      this.nodeapidata = data;
    })
   }
   OnSaveBook(){
    this.msg =''
    let book = {title:this.bookName}
    this.srv.SaveBook(book).subscribe(data=>{
      this.msg = "Book saved successfully !!"
      //this.nodeapidata = data;
    })
   }
   OnUpdateBook(){
    this.msg =''
    let book = {title:this.bookName}
    this.srv.UpdateBook(book,this.bookId).subscribe(data=>{
      //this.nodeapidata = data;
      this.msg = "Book updated successfully !!"
    })
   }
   OnDeleteBook(){
    this.msg =''
    this.srv.DeleteBook(this.bookId).subscribe(data=>{
      //this.nodeapidata = data;
      this.msg = "Book deleted successfully !!"
    })
   }


}
