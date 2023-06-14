import { Component } from '@angular/core';

@Component({
  selector: 'app-my-head',
  templateUrl: './my-head.component.html',
  styleUrls: ['./my-head.component.css']
})
export class MyHeadComponent {
  companyName: string ='Angular Project'
  
  changeName(){
    
    this.companyName= "Angular project"
    this.b=10;
    
  }
  b: any;

}
