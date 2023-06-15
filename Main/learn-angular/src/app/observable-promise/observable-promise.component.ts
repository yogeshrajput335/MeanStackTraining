import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { merge, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-observable-promise',
  templateUrl: './observable-promise.component.html',
  styleUrls: ['./observable-promise.component.css']
})
export class ObservablePromiseComponent {

  CreateObs(){
    const obs = new Observable((observer) => {
      observer.next(10);
      });
      //obs.pipe(map(value) => value * 2);
      const sub = obs.subscribe((value) => {
        console.log('Person 1',value)
        });

        const sub1 = obs.subscribe((value) => {
          console.log('Person 2',value)
          });
  }
  CreatePromise(){
    // const promise = new Promise((resolve) => {
    //   resolve(10);
    //   });

    //   //promise.then((value:any) => value * 2);

    //   promise.then((value) => {
    //     console.log(value)
    //     });
    this.doAsyncTask().then(() => console.log("Task Complete!"));
    
  }
  doAsyncTask() {
    var promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Work Complete");
        resolve();
      }, 1000);
    });
    return promise;
  }

  MergeOps(){
    const clicks = fromEvent(document, 'click');
    const timer = interval(5000);
    const clicksOrTimer = merge(clicks, timer);
    clicksOrTimer.subscribe(x => console.log(x));
  }
  MapOps(){
    const clicks = fromEvent<PointerEvent>(document, 'click');
    const positions = clicks.pipe(map(ev => ev.clientX ));

    positions.subscribe(x => console.log(x));
  }
}
