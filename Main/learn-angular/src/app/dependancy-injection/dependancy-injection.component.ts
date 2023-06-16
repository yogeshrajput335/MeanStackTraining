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

}
