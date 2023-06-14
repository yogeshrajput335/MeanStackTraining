import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './my-body.component.html',
  styleUrls: ['./my-body.component.css'],
})
export class MyBodyComponent {
  a = 19;
  NewData: any;
  parentItem(data: any) {
    this.NewData = data;
  }
}
