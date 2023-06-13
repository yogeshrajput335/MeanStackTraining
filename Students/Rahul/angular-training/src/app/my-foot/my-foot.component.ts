import { Component } from '@angular/core';

@Component({
  selector: 'app-my-foot',
  templateUrl: './my-foot.component.html',
  styleUrls: ['./my-foot.component.css']
})
export class MyFootComponent {
  numb:number = 1000;
  changeName(n:number):number{
    return this.result = this.numb*0.1;
  }
result:any
}
