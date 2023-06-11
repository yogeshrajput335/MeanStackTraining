import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-my-right',
  templateUrl: './my-right.component.html',
  styleUrls: ['./my-right.component.css']
})
export class MyRightComponent implements PipeTransform {
  mynum: number=10
  transform(value:number, exponent=2): number{
    return this.mynum= Math.pow(value,exponent)
  }

}
