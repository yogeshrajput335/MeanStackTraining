import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-right',
  templateUrl: './my-right.component.html',
  styleUrls: ['./my-right.component.css']
})
export class MyRightComponent {
  @Input() name:String="";
}
