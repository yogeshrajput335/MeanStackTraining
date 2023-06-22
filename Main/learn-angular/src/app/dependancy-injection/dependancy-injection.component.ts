import { Component } from '@angular/core';
import { CallHttpService } from '../services/call-http.service';
import { HttpCall1Service } from '../services/call-http1.service';
import { CalculatorService } from '../services/calc.service';
import { WithoutInjectableService } from '../services/withoutInjectable.service';

@Component({
  selector: 'app-dependancy-injection',
  templateUrl: './dependancy-injection.component.html',
  styleUrls: ['./dependancy-injection.component.css'],
  providers: [CalculatorService]
})
export class DependancyInjectionComponent {
  //a:any
  _data:any;
  nodeapidata:any;
  bookName=''
  bookId=0
  msg=''
 constructor(private srv : CallHttpService,private srv1: HttpCall1Service,private c : CalculatorService){
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

 AddTwoNumber(){
  // Use dependancy injection
  let res = this.c.add(10,20)
  console.log(res);
  this.c.print()
  // Use service without inject
  let s  = new  WithoutInjectableService();
  console.log(s.add(2,3))
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
