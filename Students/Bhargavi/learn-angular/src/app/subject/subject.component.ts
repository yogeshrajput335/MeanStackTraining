import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  num =0

  TestSubject(){
    let mySubject = new Subject<number>();

    mySubject.subscribe(x => console.log("First Subscription : " + x));

    mySubject.next(1);
    mySubject.next(2);
    mySubject.next(3);

    mySubject.subscribe(x => console.log("Second Subscription : " + x));

    mySubject.next(4);

  }

  Testbehavioursubject(){
    const bsubject= new BehaviorSubject<number>(200);
    bsubject.subscribe(d =>console.log("Behaviour subscription1: " + d));
    bsubject.next(300);
    bsubject.next(400);
    bsubject.subscribe(d =>console.log("Behaviour subscription2: " + d));
    bsubject.next(600);

  }

  TestReplaySubject(){
    let rsubject = new ReplaySubject<number>();

    rsubject.subscribe(x => console.log("First Subscription : " + x));

    rsubject.next(1);
    rsubject.next(2);
    rsubject.next(3);

    rsubject.subscribe(x => console.log("Second Subscription : " + x));

    rsubject.next(4);
}
}
