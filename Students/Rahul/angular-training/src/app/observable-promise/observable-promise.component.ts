import { Call } from '@angular/compiler';
import { Component } from '@angular/core';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-observable-promise',
  templateUrl: './observable-promise.component.html',
  styleUrls: ['./observable-promise.component.css']
})
export class ObservablePromiseComponent {
  var1:any;
  var2:any;

  CreatePromise(){
     const promise = new Promise(resolve => {
       console.log('Promise call...');
       setTimeout(() => {
         resolve('Promise is working..!');
     }, 1000);
    });

    promise.then(result => 
      this.var1 = result);
  }

  CreateObservable(){
    const observable = new Observable(sub =>{
      console.log("Observable Call...!");
      setTimeout(() =>{
        sub.next("Observable is working!");
      }, 1000);
    })

    observable.subscribe(res => 
      this.var2 = res);
  }
}
