import { Component } from '@angular/core';

@Component({
  selector: 'app-my-body',
  templateUrl: './my-body.component.html',
  styleUrls: ['./my-body.component.css']
})
export class MyBodyComponent {
  a = "Rahul";
  newData: any;

  recieveData(data: any){
    this.newData = data;
  }
  
}
