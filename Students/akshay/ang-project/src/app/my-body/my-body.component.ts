import { Component } from '@angular/core';

@Component({
  selector: 'app-my-body',
  templateUrl: './my-body.component.html',
  styleUrls: ['./my-body.component.css']
})
export class MyBodyComponent {
  a=25
  new=55
  NewData: any;
  parentItem(data: any){
    return this.NewData=data;
  }

}
