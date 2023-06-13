import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-left',
  templateUrl: './my-left.component.html',
  styleUrls: ['./my-left.component.css']
})
export class MyLeftComponent {
  @Input() age:any;

  MyDate =new Date()

}
