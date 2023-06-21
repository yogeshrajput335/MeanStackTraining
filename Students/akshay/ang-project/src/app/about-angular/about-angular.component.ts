import { Component } from '@angular/core';
import { BehService } from '../services/behaviour-subject.services';

@Component({
  selector: 'app-about-angular',
  templateUrl: './about-angular.component.html',
  styleUrls: ['./about-angular.component.css']
})
export class AboutAngularComponent {
  constructor(private srv: BehService){}
  n:number=0;
  SendData(){
    this.srv.set(this.n);
  }
}
