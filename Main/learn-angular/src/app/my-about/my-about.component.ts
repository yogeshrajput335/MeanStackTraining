import { Component } from '@angular/core';
import { BehService } from '../services/behaviour-subject.service';

@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.css']
})
export class MyAboutComponent {
  constructor(private srv : BehService){}
  n:number=0;

  SendData(){
    this.srv.set(this.n);
  }
}
