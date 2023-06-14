import { Component, Input, Pipe, PipeTransform, } from '@angular/core';

@Component({
  selector: 'app-my-right',
  templateUrl: './my-right.component.html',
  styleUrls: ['./my-right.component.css']
  
})
export class MyRightComponent implements PipeTransform {
  mynum: number=10
  @Input() connecting:number = 0;
  abc=25;
  transform(value:number, exponent=2): number{
    return this.mynum= Math.pow(value,exponent)
  }
  
  


}
