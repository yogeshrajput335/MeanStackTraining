import { Component } from '@angular/core';
import { BehService } from '../services/behaviour-subject.services';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-explain',
  templateUrl: './subject-explain.component.html',
  styleUrls: ['./subject-explain.component.css']
})
export class SubjectExplainComponent {
  num=0
  constructor(private srv: BehService){}
    TestSubject(){
      let mySubject= new Subject<number>();

      mySubject.subscribe(x => console.log("First subscription: " +x));
      mySubject.next(1);
      mySubject.next(2);
      mySubject.next(3);

      mySubject.subscribe(x => console.log("Second Subscription : " + x));

      mySubject.next(4);
    }
    TestBehaviourSubject(){
      let mySubject = new BehaviorSubject<number>(1);
  
      mySubject.subscribe(x => console.log("First Subscription : " + x));
  
      mySubject.next(2);
      mySubject.next(3);
  
      mySubject.subscribe(x => console.log("Second Subscription : " + x));
  
      mySubject.next(4);
    }
    TestReplaySubject(){
      let mySubject = new ReplaySubject<number>();
  
      mySubject.subscribe(x => console.log("First Subscription : " + x));
  
      mySubject.next(1);
      mySubject.next(2);
      mySubject.next(3);
  
      mySubject.subscribe(x => console.log("Second Subscription : " + x));
  
      mySubject.next(4);
    }
    GetBehaviourSubject(){
      this.srv.get().subscribe(x=>{
        this.num = x;
      })
    }
  

}
