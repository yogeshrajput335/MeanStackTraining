import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-foot',
  templateUrl: './my-foot.component.html',
  styleUrls: ['./my-foot.component.css']
})
export class MyFootComponent {
  @Input() connecting:number = 0;
    myDate= new Date()

}
