import { Component } from '@angular/core';
import { CallHttpService } from '../services/call-http-service';
import { HttpCallService2 } from '../services/call-http-services2';
import { CalculatorService } from '../services/calculator-service';


@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css'],
  providers: [CalculatorService]
})
export class InjectionComponent {
  _data:any;
  nodeapidata: any;
  bookName='';
  bookId=0;
  msg='';
  constructor(private srv: CallHttpService,private srv2: HttpCallService2,private c: CalculatorService){

  }
  GetData(){
    this._data=''
    this.srv.httpGetRequest().subscribe((data:any)=>{
      this._data=data;
    })

  }
  GetData2(){
    this._data=''
    this.srv2.getReq().subscribe((data:any)=>{
      this._data=data;
    })
  }
  MultiplyTwoNumber(){
    // Use dependancy injection
    let res = this.c.multiply(773,373)
    console.log(res);
    this.c.print()
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
