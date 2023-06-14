import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-right',
  templateUrl: './my-right.component.html',
  styleUrls: ['./my-right.component.css']
})
export class MyRightComponent {
  name ='test'
  showDiv= false
  isCondition = true
  arr =[1,20,3,4,5]
  @Input() r1=0;

  @Output() outItem = new EventEmitter<string>();

  addNewItem(data:any){
    this.outItem.emit(data);
  }

  ShowDiv(){
    this.showDiv = !this.showDiv
  }
  getClass(){
    if(this.isCondition){
      return 'test'
    } else {
      return 'test2'
    }
  }
}
