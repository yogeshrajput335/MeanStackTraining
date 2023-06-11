import { Component } from '@angular/core';

@Component({
  selector: 'app-my-head',
  templateUrl: './my-head.component.html',
  styleUrls: ['./my-head.component.css']
})
export class MyHeadComponent {
  companyName: string ='Test 123'
  
  changeName(){
    var newvar=10
    this.companyName= "Angular project"+ newvar
    this.b=10;
    
  }
  b: any;

}
