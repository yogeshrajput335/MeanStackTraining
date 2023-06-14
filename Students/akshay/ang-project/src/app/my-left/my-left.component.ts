import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-left',
  templateUrl: './my-left.component.html',
  styleUrls: ['./my-left.component.css']
})
export class MyLeftComponent {
  @Input() connecting:number = 0;
    name='what you type will display here'
    myDate= new Date()
    showDiv=false
    array1=['pipes','input/outputs','directives','routing']
    @Input() l1=0;
    @Output() outItem = new EventEmitter<string>();
    isCondition= true

    addNewItem(data:any){
    this.outItem.emit(data);
  }
  ShowDiv(){
    this.showDiv=!this.showDiv
  }
  

}
