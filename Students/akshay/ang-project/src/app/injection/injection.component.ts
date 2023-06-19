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

}
