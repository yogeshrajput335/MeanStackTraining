import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
var1:any
createPromise(){
  const promise = new Promise((resolve) =>{
    console.log("Promise is initated");
    setTimeout(() => {
      console.log("Promise is working!");
    }, 1000);
  });

  promise.then((res) => {
    console.log(res);
  })
}

createObservable(){
  const obs = new Observable((variable) =>{
    console.log("observable is initiated");
    setTimeout(() =>{ 
      console.log("observable is working");
    } , 1000);
  });

  obs.subscribe((result) =>{
    console.log(result);
  })
    
  }
}
