import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-right',
  templateUrl: './my-right.component.html',
  styleUrls: ['./my-right.component.css']
})
export class MyRightComponent {
  @Input() name:String="";
  @Output() outItem = new EventEmitter<string>();

  sendData(data: any){
    this.outItem.emit(data);
  }
}
