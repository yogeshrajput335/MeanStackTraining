import { Component } from '@angular/core';

@Component({
  selector: 'app-my-head',
  templateUrl: './my-head.component.html',
  styleUrls: ['./my-head.component.css']
})
export class MyHeadComponent {
  companyName = 'Test 123'
  changeName(){
    var xyz =10
    this.companyName = "New Name"+xyz
    this.a=10;
    this.a =" test"
  }

  a : any;
  
}