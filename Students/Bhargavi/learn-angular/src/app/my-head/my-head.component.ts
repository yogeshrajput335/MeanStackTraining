import { Component } from '@angular/core';

@Component({
  selector: 'app-my-head',
  templateUrl: './my-head.component.html',
  styleUrls: ['./my-head.component.css']
})
export class MyHeadComponent {
  UserName = 'Old Name'
  changeName(){
    var xyz =10
    this.UserName = "New Name"+xyz
  }

  a : any;
}
