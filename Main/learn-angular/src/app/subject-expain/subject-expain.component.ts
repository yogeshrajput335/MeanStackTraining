//https://upmostly.com/angular/subject-vs-replaysubject-vs-behaviorsubject
//https://medium.com/javascript-everyday/behaviorsubject-vs-replaysubject-1-beware-of-edge-cases-b361153d9ccf
import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { BehService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-subject-expain',
  templateUrl: './subject-expain.component.html',
  styleUrls: ['./subject-expain.component.css']
})
export class SubjectExpainComponent {
num =0
  constructor(private srv : BehService){}
  
  TestSubject(){
    let mySubject = new Subject<number>();

    mySubject.subscribe(x => console.log("First Subscription : " + x));

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
